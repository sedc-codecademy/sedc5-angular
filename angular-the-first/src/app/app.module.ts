// angular stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 3-rd party imports
// my modules imports
import { ComponentModule } from "../components";
// local imports
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
