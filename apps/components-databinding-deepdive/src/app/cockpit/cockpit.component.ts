import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cdd-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();;
  // newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit(): void {}

  onAddServer(nameInput: HTMLInputElement): void {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement): void {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }
}
