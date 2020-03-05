import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css']
})
export class RepeaterComponent implements OnInit {
  @Input()
  data: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
