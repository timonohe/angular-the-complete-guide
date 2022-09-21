import { Component } from '@angular/core';

@Component({
  selector: 'routing-showcase-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user: {id: number, name: string};
}
