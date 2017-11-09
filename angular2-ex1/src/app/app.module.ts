import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MeuPrimeiroComponent, PessoasComponent, DataBindingComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
