import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [
    5, 10, 20, -10, -5, 13, 8, 9
  ]
  
}
