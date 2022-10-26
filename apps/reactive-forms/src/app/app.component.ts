import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-forms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(): void {
    console.log(this.signupForm);
  }

  onAddHobby(): void {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  get hobbyControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
}
