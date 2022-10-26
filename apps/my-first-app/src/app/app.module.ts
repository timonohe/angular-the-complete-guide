import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EvenNumberComponent } from './assignment-4/even-number/even-number.component';
import { GameControlComponent } from './assignment-4/game-control/game-control.component';
import { OddNumberComponent } from './assignment-4/odd-number/odd-number.component';
import { DetailsToggleComponent } from './details-toggle/details-toggle.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { UsernameResetComponent } from './username-reset/username-reset.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { ActiveUsersComponent } from './assignment-5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment-5/inactive-users/inactive-users.component';
import { AssignmentFiveControlComponent } from './assignment-5/assignment-five-control/assignment-five-control.component';
import { TemplateDriveFormsAssignmentComponent } from './assignment-6/template-drive-forms-assignment/template-drive-forms-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UsernameResetComponent,
    DetailsToggleComponent,
    GameControlComponent,
    EvenNumberComponent,
    OddNumberComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    AssignmentFiveControlComponent,
    TemplateDriveFormsAssignmentComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
