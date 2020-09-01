import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuadroModule } from './logged/quadro/quadro.module';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { TesteService } from './teste.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuadroModule,
    HttpClientModule
  ],
  providers: [TesteService],
  bootstrap: [AppComponent],
  exports: [IndexComponent, PageNotFoundComponent]
})
export class AppModule { }
