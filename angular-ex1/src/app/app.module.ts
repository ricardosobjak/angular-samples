import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MyFormComponent } from './my-form/my-form.component';
import { InteractionComponent } from './interaction/interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    SpinnerComponent,
    MyFormComponent,
    InteractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DataBindingComponent, SpinnerComponent, MyFormComponent, InteractionComponent]
})
export class AppModule { }
