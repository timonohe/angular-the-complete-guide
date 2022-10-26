import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-forms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  genders = ['male', 'female'];
  signupForm: FormGroup;
}
