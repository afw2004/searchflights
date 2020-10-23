import { Component, ChangeDetectionStrategy, Output, OnInit, EventEmitter } from '@angular/core';
import { SearchFlightsService } from '@services/searchflights/searchflights.service';
import { SearchModel } from '@models/search.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-searchpanel',
  templateUrl: './searchpanel.component.html',
  styleUrls: ['./searchpanel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPanelComponent implements OnInit {
  @Output() search: EventEmitter<SearchModel> = new EventEmitter();

  countriesSelect = [];
  countries = [];
  formGroup = new FormGroup({
    departureCtrl: new FormControl('United Kingdom'),
    arrivalCtrl: new FormControl('Russia'),
    departureDateCtrl: new FormControl(new Date('12/1/2020')),
    maxDepartureDateCtrl: new FormControl(new Date('12/3/2020')),
    allowConnectionsCtrl: new FormControl(true),
    maxConnectionsCtrl: new FormControl(3),
    minConnectionGapCtrl: new FormControl(0),
    maxConnectionGapCtrl: new FormControl(3000),
    maxPriceCtrl: new FormControl(1400)
  });

  departureFromFilteredOptions: Observable<string[]>;
  arrivalToFilteredOptions: Observable<string[]>;
  allowConnectionsOption: Observable<boolean>;

  constructor(
    private searchFlightService: SearchFlightsService
  ) { }

  ngOnInit(): void {
    const countries = this.searchFlightService.getAllCountries();
    this.countries = countries;
    this.countriesSelect = countries.map((c) => ({ value: c, viewValue: c }));

    this.departureFromFilteredOptions = this.formGroup.get('departureCtrl').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterCountry(value))
      );

    this.arrivalToFilteredOptions = this.formGroup.get('arrivalCtrl').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterCountry(value))
      );

    this.allowConnectionsOption = this.formGroup.get('allowConnectionsCtrl').valueChanges
      .pipe(
        startWith(true)
      );
  }

  onSearchButtonClick(): void {
    this.search.emit({
      departureFrom: this.formGroup.get('departureCtrl').value,
      departureDateStart: this.formGroup.get('departureDateCtrl').value,
      departureDateFinish: this.formGroup.get('maxDepartureDateCtrl').value,
      arrivalTo: this.formGroup.get('arrivalCtrl').value,
      maxConnections: this.formGroup.get('maxConnectionsCtrl').value,
      minConnectionGap: this.formGroup.get('minConnectionGapCtrl').value,
      maxConnectionGap: this.formGroup.get('maxConnectionGapCtrl').value,
      allowConnections: this.formGroup.get('allowConnectionsCtrl').value,
      maxPrice: this.formGroup.get('maxPriceCtrl').value
    });
  }

  private _filterCountry(value: string): string[] {
    const filterValue = value.toLowerCase();
    const output = this.countries.filter(option => option.toLowerCase().includes(filterValue));
    return output;
  }
}
