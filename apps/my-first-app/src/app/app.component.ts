import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  even: number[] = [];
  odd: number[] = [];

  onGameCounterIncrease(counter: number): void {
    if (counter % 2 === 0) {
      this.even.push(counter);
    } else {
      this.odd.push(counter);
    }
  }
}
