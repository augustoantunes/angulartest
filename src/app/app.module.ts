import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindComponent } from './databind/databind.component';
import { HeaderComponent } from './header/header.component';
import { PropetibyndComponent } from './propetibynd/propetibynd.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindComponent,
    HeaderComponent,
    PropetibyndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
