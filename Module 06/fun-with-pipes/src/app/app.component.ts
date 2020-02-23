import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  today = Date.now();

  numbers = [1,3,4,2,76,54,-9,12,50];
  divider = 2;

  incDivider() {
    this.divider++;
  }
}
