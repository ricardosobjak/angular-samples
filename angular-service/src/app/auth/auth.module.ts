import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthService } from './auth.service';

import { API_BASE } from '../configs';

@NgModule({
  imports: [BrowserModule, RouterModule, FormsModule, HttpModule],
  declarations: [],
  exports: [],
  providers: [AuthService]
})
export class PessoaModule {

}
