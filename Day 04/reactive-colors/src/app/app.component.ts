import { ColorsService } from './services/colors.service';
import { Component, OnInit } from '@angular/core';
import { ColorModel } from './models/color.model';
import { Subject, Observable, merge } from 'rxjs';
import { map, mergeMap, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colors$: Observable<ColorModel[]>;
  search$ = new Subject<string>();

  isBusy$: Observable<boolean>;

  constructor(
    private colorsService: ColorsService) {}

  ngOnInit(): void {
    this.colors$ = this.search$.pipe(
      debounceTime(500), 
      switchMap(str => this.colorsService.search(str))
    );

    const true$ = this.search$.pipe(
      map(_ => true)
    );

    const false$ = this.colors$.pipe(
      map(_ => false)
    );

    this.isBusy$ = merge(true$, false$);
  }


  async onInput(val: string) {
    this.search$.next(val);
  }
}
