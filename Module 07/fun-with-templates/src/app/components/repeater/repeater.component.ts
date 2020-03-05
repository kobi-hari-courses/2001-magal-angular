import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css']
})
export class RepeaterComponent implements OnInit {
  @Input()
  data: string[];



  @ContentChild(TemplateRef)
  itemTemplate: TemplateRef<any>;

  constructor() { 
    let x = [1, 2, 3];
    let y = [0, ...x, 5]

    let z = {
      a: 10, 
      b: 20, 
      c: 30
    }

    let w = {
      ...z, 
      a: 15
    }
  
  }

  ngOnInit(): void {
  }

}
