import { Component } from '@angular/core';
import { Observable, interval, Observer, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowingReader: boolean = true;
  toggleReader() {
    this.isShowingReader = !this.isShowingReader;
  }


  createObserver(id: string): Observer<number> {
    return {
      next: (value: number) => console.log(`observer ${id} next ${value}`), 
      complete: () => console.log(`observer ${id} complete`), 
      error: (err) => console.log(`observer ${id} error ${err}`)
    };
  }

  createInterval(): Observable<number> {
    return interval(1000);
  }

  createCustomObservable(): Observable<number> {
    let res = new Observable<number>(observer => {
      observer.next(42);
      setTimeout(() => observer.next(50), 2000);
      setTimeout(() => observer.next(60), 3000);
      setTimeout(() => observer.next(100), 5000);
      setTimeout(() => observer.next(200), 8000);
      setTimeout(() => observer.complete(), 10000);
    });

    return res;
  }

  createSubject(): Observable<number> {
    let subject = new Subject<number>();
    subject.next(42);
    setTimeout(() => subject.next(50), 2000);
    setTimeout(() => subject.next(60), 3000);
    setTimeout(() => subject.next(100), 5000);
    setTimeout(() => subject.next(200), 8000);
    setTimeout(() => subject.complete(), 10000);

    return subject;
  }

  createBehaviorSubject(): Observable<number> {
    let subject = new BehaviorSubject<number>(42);
    setTimeout(() => subject.next(50), 2000);
    setTimeout(() => subject.next(60), 3000);
    setTimeout(() => subject.next(100), 5000);
    setTimeout(() => subject.next(200), 8000);
    setTimeout(() => subject.complete(), 10000);

    return subject;
  }


  go() {
    console.log('started');

    let observable = this.createBehaviorSubject();
    let observer1 = this.createObserver('1');
    let observer2 = this.createObserver('2');

    observable.subscribe(observer1);

    setTimeout(() => observable.subscribe(observer2), 3500);
  }
}
