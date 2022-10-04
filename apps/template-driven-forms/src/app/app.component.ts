import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven-forms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
