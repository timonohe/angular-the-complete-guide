import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
})
export class GameControlComponent {
  @Output() counterIncrementEvent = new EventEmitter<number>();

  counter = 1;
  interval = 0

  startGame(): void {
    this.interval = window.setInterval(() => this.counterIncrementEvent.emit(this.counter++), 1000);
  }

  stopGame(): void {
    if (this.interval) {
      window.clearInterval(this.interval);
    }
  }
}
