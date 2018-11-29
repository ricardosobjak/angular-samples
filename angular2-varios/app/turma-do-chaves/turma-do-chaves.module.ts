import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { QuicoComponent, MadrugaComponent, TurmaDefaultComponent, TurmaDoChavesComponent } from './index';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  declarations: [QuicoComponent, MadrugaComponent, TurmaDefaultComponent, TurmaDoChavesComponent],
  exports: [QuicoComponent, MadrugaComponent, TurmaDefaultComponent, TurmaDoChavesComponent],
  providers: []
})
export class TurmaDoChavesModule { }
