import { Component } from '@angular/core';

@Component({
  selector: 'app-username-reset',
  templateUrl: './username-reset.component.html',
  styleUrls: ['./username-reset.component.scss'],
})
export class UsernameResetComponent {
  username = '';

  resetUsername(): void {
    this.username = '';
  }
}
