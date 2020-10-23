import { Component, ChangeDetectionStrategy, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { SearchFlightsService } from '@services/searchflights/searchflights.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { FlightRouteModel } from '@models/flightroute.model';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-searchflights',
  templateUrl: './searchflights.component.html',
  styleUrls: ['./searchflights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFlightsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  private currentSort: Sort = {
    active:  '',
    direction:  ''
  };

  private routes: FlightRouteModel[] = [];
  sortedRoutes: FlightRouteModel[] = [];

  constructor(
    private searchFlightsService: SearchFlightsService,
    private cd: ChangeDetectorRef
  ) { }

  updateSorting(): void {
    this.sortedRoutes = this.routes.sort((a, b) => {
      const multiplier = (this.currentSort.direction === 'desc') ? -1 : 1;
      if (this.currentSort.active === 'Connections') {
        return ((a.getFlights().length > b.getFlights().length) ? 1 : -1) * multiplier;
      } else if (this.currentSort.active === 'Price') {
        return ((a.getPrice() > b.getPrice()) ? 1 : -1) * multiplier;
      } else if (this.currentSort.active === 'Date') {
        return ((a.getOrigin().date > b.getOrigin().date) ? 1 : -1) * multiplier;
      } else if (this.currentSort.active === 'FlightLength') {
        const aLength = a.getDestination().date.getTime() - a.getOrigin().date.getTime();
        const bLength = b.getDestination().date.getTime() - b.getOrigin().date.getTime();
        return ((aLength > bLength) ? 1 : -1) * multiplier;
      }
    });
    this.cd.markForCheck();
  }

  ngOnInit(): void {
    this.searchFlightsService.flightRoutes.pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe(routes => {
      this.routes = routes;
      this.updateSorting();
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  sortData(sort: Sort): void {
    this.currentSort = sort;
    this.updateSorting();
    console.log(sort);
  }
}
