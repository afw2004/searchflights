import { TestBed } from '@angular/core/testing';

import { SearchFlightsService } from '@services/searchflights/searchflights.service';
import { ALL_FLIGHTS } from 'src/app/data/allflights';
import { SearchModel } from '@models/search.model';

describe('SearchFlightsService', () => {
  let service: SearchFlightsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        SearchFlightsService,
        {
          provide: 'ALL_FLIGHTS',
          useValue: ALL_FLIGHTS
        }
      ]
    });
  });

  it('should create', () => {
    service = TestBed.inject(SearchFlightsService);
    expect(service).toBeTruthy();
  });

  it('should find one flight', () => {
      const searchModel: SearchModel = {
        departureFrom: 'United Kingdom',
        departureDateStart: new Date('12/1/2020'),
        departureDateFinish: new Date('12/3/2020'),
        arrivalTo: 'Russia',
        maxConnections: 0,
        minConnectionGap: 0,
        maxConnectionGap: 6000,
        allowConnections: false,
        maxPrice: 1400
      };
      service = TestBed.inject(SearchFlightsService);
      const routes = service.searchFlights(searchModel);
      expect(routes.length).toEqual(1);
  });

  it('should find three flight with connections', () => {
    const searchModel: SearchModel = {
      departureFrom: 'United Kingdom',
      departureDateStart: new Date('12/1/2020'),
      departureDateFinish: new Date('12/3/2020'),
      arrivalTo: 'Russia',
      maxConnections: 4,
      minConnectionGap: 0,
      maxConnectionGap: 6000,
      allowConnections: true,
      maxPrice: 1400
    };
    service = TestBed.inject(SearchFlightsService);
    const routes = service.searchFlights(searchModel);
    expect(routes.length).toEqual(3);
  });
});
