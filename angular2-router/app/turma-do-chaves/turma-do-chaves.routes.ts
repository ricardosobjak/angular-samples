import { Route } from '@angular/router';

import { QuicoComponent, MadrugaComponent, TurmaDoChavesComponent, TurmaDefaultComponent } from './index';

export const TurmaDoChavesRoutes: Route[] = [
  {
    path: 'turmadochaves',
    component: TurmaDoChavesComponent,
    children: [
      { path: '', component: TurmaDefaultComponent, pathMatch: 'full' },
      { path: 'quico', component: QuicoComponent },
      { path: 'madruga', component: MadrugaComponent }
    ]
  },
]
