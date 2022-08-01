import { Component } from '@angular/core';

@Component({
  selector: 'app-details-toggle',
  templateUrl: './details-toggle.component.html',
  styleUrls: ['./details-toggle.component.scss'],
})
export class DetailsToggleComponent {
  showDetails = false;

  clickLogger: Date[] = [];

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
    this.clickLogger.push(new Date());
  }
}
