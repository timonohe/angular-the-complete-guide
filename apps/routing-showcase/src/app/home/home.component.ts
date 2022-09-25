import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'routing-showcase-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private router: Router) { }

  onLoadServer(id: number) {
    // complex calculation
    this.router.navigate(
      ['/servers', id, 'edit'],
      {
        queryParams: {
          allowEdit: '1'
        },
        fragment: 'loading'
      }
    );
  }
}
