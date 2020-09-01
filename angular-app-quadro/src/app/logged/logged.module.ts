import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { LoggedComponent } from './logged.component';
import { QuadroModule } from './quadro/quadro.module';
import { DefaultComponent } from './default/default.component';
import { TopbarComponent } from './topbar/topbar.component';


@NgModule({
  declarations: [LoggedComponent, DefaultComponent, TopbarComponent],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    QuadroModule
  ],
  exports: [DefaultComponent, TopbarComponent]
})
export class LoggedModule { }
