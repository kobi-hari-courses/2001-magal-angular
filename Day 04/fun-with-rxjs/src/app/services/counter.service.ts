import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private value: number = 0;
  private value$ = new BehaviorSubject<number>(0);

  increment() {
    this.value$.next(++this.value);
  }

  decrement() {
    this.value$.next(--this.value);
  }

  getValue(): Observable<number> {
    return this.value$.asObservable();
  }

  constructor() { }
}
