import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightsComponent } from './searchflights.component';
import { SearchFlightsService } from '@services/searchflights/searchflights.service';
import { ALL_FLIGHTS } from 'src/app/data/allflights';

describe('SearchFlightsComponent', () => {
  let component: SearchFlightsComponent;
  let fixture: ComponentFixture<SearchFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFlightsComponent ],
      providers: [
        SearchFlightsService,
        {
          provide: 'ALL_FLIGHTS',
          useValue: ALL_FLIGHTS
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
