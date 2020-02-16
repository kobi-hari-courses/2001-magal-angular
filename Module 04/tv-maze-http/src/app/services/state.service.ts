import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Show } from '../models/data.model';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private id: string = '';
  private id$ = new BehaviorSubject<string>('');
  private show$: Observable<Show>;

  constructor(private data: DataService) {
    this.show$ = this.id$.pipe(
      switchMap(id => this.data.getShow(id))
    );
  }

  getSelectedId(): Observable<string> {
    return this.id$.asObservable();
  }

  getSelectedShow(): Observable<Show> {
    return this.show$;
  }

  setSelectedId(value: string): Promise<void> {
    this.id = value;
    this.id$.next(value);
    return Promise.resolve();
  }
}
