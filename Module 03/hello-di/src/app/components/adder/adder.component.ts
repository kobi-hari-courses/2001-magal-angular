import { AdditionServiceDef } from './../../services/addition-service-def';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css'], 
})
export class AdderComponent {
  res: number;

  constructor(public addition: AdditionServiceDef){
  }

  calculate(op1: string, op2: string) {
    let a = Number(op1);
    let b = Number(op2);

    this.res = this.addition.add(a, b);

  }

}
