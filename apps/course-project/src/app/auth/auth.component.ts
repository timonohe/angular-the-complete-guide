import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AuthResponseData, AuthService } from "./auth.service";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";
import { Subscription } from "rxjs/internal/Subscription";

@Component({
  selector: 'course-project-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {
  loginMode: 'login' | 'signUp' = 'login';
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;

  private closeSub: Subscription;

  constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnDestroy(): void {
      if (this.closeSub) {
        this.closeSub.unsubscribe();
      }
  }

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
        this.showErrorAlert(errorMessage.message);
        this.isLoading = false;
      }
    })

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.closeAlert.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
