import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FlightRouteModel } from '@models/flightroute.model';

@Component({
  selector: 'app-flightroute',
  templateUrl: './flightroute.component.html',
  styleUrls: ['./flightroute.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightRouteComponent{
  @Input() item: FlightRouteModel = new FlightRouteModel(
    { country: '', date: new Date() },
    { country: '', date: new Date() },
    []
  );

  constructor(
  ) { }
}
