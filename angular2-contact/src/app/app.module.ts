import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

import { ContactModule } from './contact/contact.module';

import { routes } from './app.routes';

@NgModule({
  imports:      [
    BrowserModule,
    ContactModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
