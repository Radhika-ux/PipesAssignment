import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesinbuiltComponent } from './pipes/pipesinbuilt/pipesinbuilt.component';
import { JsonComponent } from './auth/json/json.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesinbuiltComponent,
    JsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
