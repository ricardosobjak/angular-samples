import { Routes } from '@angular/router';

import { TurmaDoChavesRoutes } from './turma-do-chaves/index';

import { AppComponent } from './app.component';
import { DefaultComponent } from './default.component';
import { MeuCmp1Component } from './meu-componente1/meu-componente1.component';
import { MeuCmp2Component } from './meu-componente2/meu-componente2.component';

export const ROUTES: Routes = [
  ...TurmaDoChavesRoutes,
  { path: '', component: DefaultComponent },
  { path: 'componente1', component: MeuCmp1Component },
  { path: 'componente2', component: MeuCmp2Component }
  //{ path: '**', component: DefaultComponent }
];
