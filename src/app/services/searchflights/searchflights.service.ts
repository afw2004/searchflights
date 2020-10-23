import { Injectable, Inject } from '@angular/core';
import { FlightModel } from '@models/flight.model';
import { FlightRouteModel } from '@models/flightroute.model';
import { SearchModel } from '@models/search.model';
import { Subject } from 'rxjs';

@Injectable()
export class SearchFlightsService {
    public flightRoutes = new Subject<FlightRouteModel[]>();

    constructor(
        @Inject('ALL_FLIGHTS') private allFlights: FlightModel[]
    ) {}


    public getAllCountries(): string[] {
        const countries: string[] = [];
        this.allFlights.forEach((fl) => {
            countries.push(fl.origin.country);
            countries.push(fl.destination.country);
        });

        return [... new Set(countries)].sort();
    }

    public searchFlights(
        searchModel: SearchModel
    ): FlightRouteModel[] {
        const addMinutes = (dt, minutes) => {
            return new Date(dt.getTime() + minutes * 60000);
        };

        let flights = this.allFlights;
        flights = flights.filter((x) => {
            return (
                (searchModel.departureFrom ? (x.origin.country === searchModel.departureFrom) : true)
                && (searchModel.departureDateStart ? (x.origin.date >= searchModel.departureDateStart) : true)
                && (searchModel.departureDateFinish ? (x.origin.date <= searchModel.departureDateFinish) : true)
            );
        });

        if (!searchModel.arrivalTo) {
            return flights.map((fl) => new FlightRouteModel(fl.origin, fl.destination, [fl]));
        }

        let routes = flights
            .filter((x) => x.destination.country === searchModel.arrivalTo)
            .map((fl) => new FlightRouteModel(fl.origin, fl.destination, [fl]));

        if (!searchModel.allowConnections || (searchModel.maxConnections <= 0)) {
            this.flightRoutes.next(routes);
            return routes;
        }

        const flightsRemaining = flights.filter((x) => x.destination.country !== searchModel.arrivalTo);

        flightsRemaining.forEach((fl) => {
            this
                .searchFlights(
                    {
                        departureFrom: fl.destination.country,
                        departureDateStart: addMinutes(fl.destination.date, searchModel.minConnectionGap),
                        departureDateFinish: addMinutes(fl.destination.date, searchModel.maxConnectionGap),
                        arrivalTo: searchModel.arrivalTo,
                        maxConnections: searchModel.maxConnections - 1,
                        minConnectionGap: searchModel.minConnectionGap,
                        maxConnectionGap: searchModel.maxConnectionGap,
                        allowConnections: searchModel.allowConnections,
                        maxPrice: 0
                    }
                )
                .forEach((route) => {
                    routes.push(new FlightRouteModel(fl.origin, route.getDestination(), [fl].concat(route.getFlights())));
                });
        });

        if (searchModel.maxPrice > 0) {
            routes = routes.filter((r) => r.getPrice() <= searchModel.maxPrice);
        }

        this.flightRoutes.next(routes);
        return routes;
    }
}
