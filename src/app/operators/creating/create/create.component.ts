import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  simpleCreateObservable: Observable<any> = Observable.create((observer) => {
    setTimeout(() => {
      observer.next(Math.floor(Math.random() * 100));
      observer.complete();
    }, 5000);
  });
  simpleCreateObservableSubscription: Subscription;
  simpleCreateObservableValue: number;

  timerObservable: Observable<any> = Observable.create((observer) => {
    let counter = 0;
    setInterval(() => {
      observer.next();
      counter++;
      if (counter === 5) {
        observer.complete();
      }
    }, 2000);
  });
  timerSubscription: Subscription;
  timerEmitCount = 0;
  timerObservableComplete = false;

  constructor() { }

  ngOnInit() {
  }

  subscribeSimpleObservable() {
    this.simpleCreateObservableSubscription = this.simpleCreateObservable.subscribe(val => this.simpleCreateObservableValue = val);
  }

  subscribeTimerObservable() {
    this.timerSubscription = this.timerObservable.subscribe(
      () => {
        this.timerEmitCount++;
      },
      () => {},
      () => this.timerObservableComplete = true
    );
  }

}
