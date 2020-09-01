import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuadroRoutingModule } from './quadro-routing.module';
import { QuadroListComponent } from './quadro-list/quadro-list.component';
import { QuadroService } from './quadro.service';


@NgModule({
  declarations: [QuadroListComponent],
  imports: [
    CommonModule,
    QuadroRoutingModule
  ],
  exports: [QuadroListComponent],
  providers: [QuadroService]
})
export class QuadroModule { }
