import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { UsernameResetComponent } from './username-reset/username-reset.component';
import { DetailsToggleComponent } from './details-toggle/details-toggle.component';
import { GameControlComponent } from './assignment-4/game-control/game-control.component';
import { EvenNumberComponent } from './assignment-4/even-number/even-number.component';
import { OddNumberComponent } from './assignment-4/odd-number/odd-number.component';

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
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
