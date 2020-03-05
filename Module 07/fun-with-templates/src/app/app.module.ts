import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToggleComponent } from './componenets/toggle/toggle.component';
import { HeaderComponent } from './components/header/header.component';
import { RepeaterComponent } from './components/repeater/repeater.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    HeaderComponent,
    RepeaterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
