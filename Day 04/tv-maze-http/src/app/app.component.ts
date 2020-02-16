import { StateService } from './services/state.service';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import { Show } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  shows: Promise<Show[]>;
  selectedShow$: Observable<Show>;

  constructor(
    private data: DataService, 
    private state: StateService){}

  ngOnInit(): void {
    this.selectedShow$ = this.state.getSelectedShow();
  }

  go() {
    this.shows = this.data.getAllShows();
  }

  async setSelected(id: string) {
    await this.state.setSelectedId(id);
  }

}
