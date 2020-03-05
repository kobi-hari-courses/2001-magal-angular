import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BlaComponent } from './components/bla/bla.component';
import { DisabledInputDirective } from './directives/disabled-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    BlaComponent,
    DisabledInputDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
