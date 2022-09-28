import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'observables-showcase-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  ngOnInit(): void {
      this.firstObsSubscription = interval(1000).subscribe(count => {
        console.log(count);
      });
  }

  ngOnDestroy(): void {
      this.firstObsSubscription.unsubscribe();
  }

}
