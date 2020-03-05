import { ToggleComponent } from './../../componenets/toggle/toggle.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = '';

  setTitle(value: string) {
    this.title = value;
  }


  constructor(private parentToggle: ToggleComponent) { }

  ngOnInit(): void {
    if (this.parentToggle) {
      this.parentToggle.bg = 'yellow';
    }
  }

}
