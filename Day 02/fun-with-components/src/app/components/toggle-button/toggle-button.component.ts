import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit, OnDestroy {
  @Input()
  isOn: boolean = false;

  state: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.state = this.isOn;
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  toggle() {
    this.state = !this.state;
  }


}
