import { Route } from '@angular/router';

import { PessoaComponent } from './pessoa.component';

export const PessoaRoutes: Route[] = [
  {
    path: 'pessoa',
    component: PessoaComponent
    //children : [{ path: 'xxxx', component:XXXXXComponent }]
  }
];
