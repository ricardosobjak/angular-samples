import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { DefaultComponent } from './default.component';

import { TurmaDoChavesModule } from './turma-do-chaves/turma-do-chaves.module';

import { MeuCmp1Component } from './meu-componente1/meu-componente1.component';
import { MeuCmp2Component } from './meu-componente2/meu-componente2.component';

import { ROUTES } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TurmaDoChavesModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [AppComponent, DefaultComponent, MeuCmp1Component, MeuCmp2Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
