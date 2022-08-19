import { Component } from '@angular/core';

@Component({
  selector: 'course-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadedFeature = 'recipe';

  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
