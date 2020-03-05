import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'input[off]'
})
export class DisabledInputDirective {

  @HostBinding('style.background-color')
  bg: string =  'cyan';

  constructor() { }

}
