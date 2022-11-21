import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'course-project-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  loginMode: 'login' | 'signUp' = 'login';

  onSwitchMode() {
    this.loginMode === 'login' ? this.loginMode = 'signUp' : this.loginMode = 'login';
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }
}
