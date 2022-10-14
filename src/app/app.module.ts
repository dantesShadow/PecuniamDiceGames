import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceComponent } from './dice/dice.component';
import { DiceHandComponent } from './dice-hand/dice-hand.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    DiceHandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
