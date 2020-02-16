import { ALLCOLORS } from './../models/all-colors';
import { Injectable } from '@angular/core';
import { ColorModel } from '../models/color.model';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  private delay(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis));
  }

  async search(filter: string): Promise<ColorModel[]> {
    console.log(`starting to search for ${filter}`);

    if (!filter) return [];

    filter = filter.toLowerCase();
    const entries = Object.entries(ALLCOLORS);
    const res = entries
      .map(touple => { 
          return <ColorModel> {displayName: touple[1], code: touple[0]
          }})
      .filter(color => color.displayName.toLowerCase().includes(filter));

    await this.delay(4000);
    return res;
  }


  constructor() { }
}
