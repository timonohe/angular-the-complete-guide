import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, observable, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'observables-showcase-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  ngOnInit(): void {
      // this.firstObsSubscription = interval(1000).subscribe(count => {
      //   console.log(count);
      // });

      const customIntervalObservable = new Observable(observer => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          count++;
        }, 1000);
      });
      this.firstObsSubscription = customIntervalObservable.subscribe(count => console.log(count));
  }

  ngOnDestroy(): void {
      this.firstObsSubscription.unsubscribe();
  }

}
