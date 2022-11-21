import { Component } from "@angular/core";

@Component({
  selector: 'course-project-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  loginMode: 'login' | 'signUp' = 'login';

  onSwitchMode() {
    this.loginMode === 'login' ? this.loginMode = 'signUp' : this.loginMode = 'login';
  }
}
