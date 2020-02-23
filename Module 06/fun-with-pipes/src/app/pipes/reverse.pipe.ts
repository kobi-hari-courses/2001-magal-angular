import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'reverse', 
  pure: true
})
export class ReversePipe implements PipeTransform {

  transform(value: string | null): string | null {
    if (!value) return null;

    if (typeof(value)==='string') {
      let a = value.split('');
      let r = a.reverse();
      let res = r.join('');
      return res;
    } else {
      return null;
    }
  }

}
