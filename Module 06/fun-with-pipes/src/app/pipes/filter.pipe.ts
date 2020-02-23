import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: number[], divider: number): number[] {
    if (!value) return [];

    if ((typeof(divider) !== 'number') || (divider === 0)) divider = 2;

    return value.filter(n => n % divider === 0);
  }

}
