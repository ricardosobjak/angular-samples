import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaRoutes } from './pessoa/pessoa.routes';

const routes: Routes = [
  ...PessoaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
