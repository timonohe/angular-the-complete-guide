import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cdd-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
})
export class ServerElementComponent implements OnInit {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() {}

  ngOnInit(): void {}
}
