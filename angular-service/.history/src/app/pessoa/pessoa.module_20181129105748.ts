import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PessoaComponent } from './pessoa.component';
import { PessoaService } from './pessoa.service';
import { AuthService } from '../auth/auth.service';




@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule],
  declarations: [PessoaComponent],
  exports: [PessoaComponent],
  providers: [PessoaService, AuthService]
})
export class PessoaModule {

}
