import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PessoasService } from './pessoas/pessoas.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, MeuPrimeiroComponent, PessoasComponent, DataBindingComponent],
  bootstrap: [AppComponent],
  providers: [PessoasService]
})
export class AppModule { }
