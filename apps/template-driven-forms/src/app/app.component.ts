import { Component } from '@angular/core';

@Component({
  selector: 'template-driven-forms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
}
