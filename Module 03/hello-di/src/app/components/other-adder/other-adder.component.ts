import { AdditionLogService } from './../../services/addition-log.service';
import { Component, OnInit } from '@angular/core';
import { AdditionServiceDef } from 'src/app/services/addition-service-def';

@Component({
  selector: 'app-other-adder',
  templateUrl: './other-adder.component.html',
  styleUrls: ['./other-adder.component.css']
})
export class OtherAdderComponent  {
  res: number;

  constructor(public addition: AdditionLogService){
  }

  calculate(op1: string, op2: string) {
    let a = Number(op1);
    let b = Number(op2);

    this.res = this.addition.add(a, b);

  }
}
