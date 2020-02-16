import { StatisticsService } from './services/statistics.service';
import { AdditionService } from 'src/app/services/addition.service';
import { AdditionService } from './services/addition.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdderComponent } from './components/adder/adder.component';
import { GroupComponent } from './components/group/group.component';
import { OtherAdderComponent } from './components/other-adder/other-adder.component';

@NgModule({
  declarations: [
    AppComponent,
    AdderComponent,
    GroupComponent,
    OtherAdderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
