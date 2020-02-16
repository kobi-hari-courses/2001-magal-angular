import { RandomizerService } from './services/randomizer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: Promise<number[]>;

  constructor(private randomizer: RandomizerService){}

  createDelay(res: number, delay: number) : Promise<number> {
    let p = new Promise<number>((resolve, reject) => {
      setTimeout(() => resolve(res), delay);
    });

    return p;
  }

  go() {
    this.value = this.randomizer.nextMany(10);
  }


  async run() {
    console.log('1');
    let p = this.createDelay(42, 2000);

    let res = await p;
    console.log('2. promise completed with result ' + res);

    return 'Hello';
  }

}
