import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: 'course-project-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  loginMode: 'login' | 'signUp' = 'login';

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.loginMode === 'login' ? this.loginMode = 'signUp' : this.loginMode = 'login';
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    if (this.loginMode === 'login') {
      // Do something
    } else {
      this.authService.signup(email, password).subscribe(resData => {
        console.log(resData);
      }, error => {
        console.log(error);
      });
    }

    form.reset();
  }
}
