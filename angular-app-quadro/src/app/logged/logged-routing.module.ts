import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedComponent } from './logged.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
    path: '', component: LoggedComponent, 
    children: [
      { path: '', component: DefaultComponent },
      { path: 'quadro', loadChildren: () => import('./quadro/quadro.module').then(m => m.QuadroModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule {}
