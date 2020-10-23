import { Component, ViewChild } from '@angular/core';
import { SearchModel } from '@models/search.model';
import { SearchFlightsService } from '@services/searchflights/searchflights.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  title = 'Flight Search';

  constructor(
    private searchFlightsService: SearchFlightsService
  ) {}

  onSearch(searchModel: SearchModel): void {
    this.searchFlightsService.searchFlights(searchModel);
    this.sidenav.toggle();
  }
}
