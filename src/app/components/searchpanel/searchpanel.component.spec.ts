import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPanelComponent } from './searchpanel.component';
import { SearchFlightsService } from '@services/searchflights/searchflights.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ALL_FLIGHTS } from 'src/app/data/allflights';

describe('SearchPanelComponent', () => {
  let component: SearchPanelComponent;
  let fixture: ComponentFixture<SearchPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPanelComponent ],
      providers: [
        SearchFlightsService,
        {
          provide: 'ALL_FLIGHTS',
          useValue: ALL_FLIGHTS
        }
      ],
      imports: [ MatAutocompleteModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
