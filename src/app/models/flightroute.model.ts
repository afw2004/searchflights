import { FlightConnectionModel } from './flightconnection.model';
import { FlightModel } from './flight.model';

export class FlightRouteModel {
    constructor(
        private origin: FlightConnectionModel,
        private destination: FlightConnectionModel,
        private flights: FlightModel[]
    ) {
        if (!flights) {
            this.flights = [];
        }
    }

    public getFlights(): FlightModel[] {
        return this.flights;
    }

    public addFlights(flights: FlightModel[]): void {
        this.flights = this.flights.concat(flights);
    }

    public getOrigin(): FlightConnectionModel {
        return this.origin;
    }

    public getDestination(): FlightConnectionModel {
        return this.destination;
    }

    public getPrice(): number {
        return this.flights.reduce((a, f) => a + f.price, 0);
    }
}
