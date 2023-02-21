import { Component } from '@angular/core';
import { AnalyticsService } from '../../shared/analytics.service';
import { HighlightDirective } from '../../shared/highlight.directive';

@Component({
  standalone: true,
  imports: [HighlightDirective],
  selector: 'standalone-components-preview-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
