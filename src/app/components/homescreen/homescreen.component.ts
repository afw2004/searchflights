import { Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomescreenComponent{
  constructor(
  ) { }
}
