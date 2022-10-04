import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, observable, Observable, Subscription } from 'rxjs';

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
          if (count === 2) {
            observer.complete();
          }

          if (count > 3) {
            observer.error(new Error('Count is greater 3!'));
          }
          count++;
        }, 1000);
      });

      this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter(data => data > 0),
        map((data: number) => `Round: ${data}`)
      )
      .subscribe({
        next: (nextInput) => {
          console.log(nextInput);
        },
        error: (errorInput) => {
          console.log(errorInput);
          alert(errorInput.message);
        },
        complete: () => {
          console.log('Completed');
        }
      });
  }

  ngOnDestroy(): void {
      this.firstObsSubscription.unsubscribe();
  }

}
