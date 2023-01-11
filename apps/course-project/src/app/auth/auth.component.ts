import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AuthResponseData, AuthService } from "./auth.service";

@Component({
  selector: 'course-project-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  loginMode: 'login' | 'signUp' = 'login';
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.loginMode === 'login' ? this.loginMode = 'signUp' : this.loginMode = 'login';
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.loginMode === 'login') {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe({
      next: resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      error: errorMessage => {
        this.error = errorMessage.message;
        this.isLoading = false;
      }
    })

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }
}
