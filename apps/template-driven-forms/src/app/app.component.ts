import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven-forms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(): void {
    console.log(this.signupForm);
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
}
