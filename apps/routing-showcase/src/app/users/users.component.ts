import { Component } from '@angular/core';

@Component({
  selector: 'routing-showcase-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users = [
    { id: 1, name: 'Timo' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'Chris' }
  ];
}
