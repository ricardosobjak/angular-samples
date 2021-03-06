import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, IndexComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
