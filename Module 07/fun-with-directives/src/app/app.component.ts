import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fun-with-directives';

  logH1Tiggered() {
    console.log('h1 triggered');
  }
}
