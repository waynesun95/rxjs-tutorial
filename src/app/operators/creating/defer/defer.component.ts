import { Component, OnInit } from '@angular/core';
import { Observable, defer, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.scss']
})
export class DeferComponent implements OnInit {

  nonDeferredObservable: Observable<any>;
  deferredObservable: Observable<any>;
  observableCreationTimestamp: Date;
  nonDeferredObservableSubscription: Subscription;
  deferredObservableSubscription: Subscription;
  observableSubscriptionTimestamp: Date;
  nonDeferredObservableValue: Date;
  deferredObservableValue: Date;

  constructor() { }

  ngOnInit() {
  }

  createObservables() {
    this.nonDeferredObservable = of(new Date());
    this.deferredObservable = defer(() => of(new Date()));
    this.observableCreationTimestamp = new Date();
  }

  subscribeObservables() {
    this.nonDeferredObservableSubscription = this.nonDeferredObservable.subscribe(val => this.nonDeferredObservableValue = val);
    this.deferredObservableSubscription = this.deferredObservable.subscribe(val => this.deferredObservableValue = val);
    this.observableSubscriptionTimestamp = new Date();
  }

}
