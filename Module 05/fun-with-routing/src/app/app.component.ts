import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}

  navigateToRandom() {
    let rand = Math.floor(Math.random()*3);
    let pages = ['a', 'b', 'c'];
    let address = pages[rand];

    this.router.navigate([address]);

  }

}
