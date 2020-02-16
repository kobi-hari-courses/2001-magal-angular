import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomizerService {
  constructor() { }

  delay<T>(value: T, millis: number): Promise<T> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value), millis);
    });
  }

  async next(min: number, max: number): Promise<number> {
    let range = max - min;
    let rnd = Math.floor((range) * Math.random());
    let res = await this.delay(rnd + min, 3000);
    return res;
  }

  nextQuick(min: number, max: number): Promise<number> {
    let range = max - min;
    let rnd = Math.floor((range) * Math.random());
    let res = min + rnd;
    return Promise.resolve(res);
  }

  nextMany(count: number): Promise<number[]> {
    let promises: Promise<number>[] = [];
    let res: number[] = [];
    for (let i = 0; i< count; i++) {
      promises.push(this.next(1, 100));
    }

    let grandPromise = Promise.all(promises);
    return grandPromise;

  }

  async stam(): Promise<[number, number]> {
    let p1 = this.next(1, 10);
    let p2 = this.next(2, 12);
    let p3 = this.next(4, 18);

    let promises = [p1, p2, p3]
      .map((p, i) => p.then(res => [i, res]));

    let res = await Promise.race(promises);
    return [res[0], res[1]];
  }


}
