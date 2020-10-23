import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { SearchFlightsComponent } from './components/searchflights/searchflights.component';
import { SearchPanelComponent } from './components/searchpanel/searchpanel.component';
import { FlightRouteComponent } from './components/flightroute/flightroute.component';

import { SearchFlightsService } from './services/searchflights/searchflights.service';
import { ALL_FLIGHTS } from './data/allflights';

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    SearchFlightsComponent,
    SearchPanelComponent,
    FlightRouteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [
    SearchFlightsService,
    {
      provide: 'ALL_FLIGHTS',
      useValue: ALL_FLIGHTS
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
