import { CounterService } from './../../services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-editor',
  templateUrl: './counter-editor.component.html',
  styleUrls: ['./counter-editor.component.css']
})
export class CounterEditorComponent {

  constructor(private counter: CounterService) { }

  inc() {
    this.counter.increment();
  }

  dec() {
    this.counter.decrement();
  }

}
