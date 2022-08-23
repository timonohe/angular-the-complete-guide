import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BetterHighlightDirective,
    BasicHighlightDirective,
    UnlessDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
