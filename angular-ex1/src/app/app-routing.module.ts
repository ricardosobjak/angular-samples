import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MyFormComponent } from './my-form/my-form.component';
import { InteractionComponent } from './interaction/interaction.component';


const routes: Routes = [
  { path: 'databinding', component: DataBindingComponent },
  { path: 'form', component: MyFormComponent },
  { path: 'interaction', component: InteractionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
