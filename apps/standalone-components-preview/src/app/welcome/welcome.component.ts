import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';

@Component({
  standalone: true,
  imports: [DetailsComponent],
  selector: 'standalone-components-preview-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {}
