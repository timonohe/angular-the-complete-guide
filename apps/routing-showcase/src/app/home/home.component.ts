import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'routing-showcase-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private router: Router) { }

  onLoadServers() {
    // complex calculation
    this.router.navigate(['/servers']);
  }
}
