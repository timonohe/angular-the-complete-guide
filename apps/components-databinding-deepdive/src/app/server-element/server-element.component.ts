import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cdd-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() {}

  ngOnInit(): void {}
}
