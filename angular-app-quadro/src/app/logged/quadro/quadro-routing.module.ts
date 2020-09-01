import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuadroListComponent } from './quadro-list/quadro-list.component';

const routes: Routes = [{ path: '', component: QuadroListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuadroRoutingModule {}
