import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-number',
  templateUrl: './even-number.component.html',
  styleUrls: ['./even-number.component.scss'],
})
export class EvenNumberComponent {
  @Input() number: number | undefined;
}
