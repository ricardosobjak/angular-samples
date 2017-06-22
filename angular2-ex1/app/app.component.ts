import { Component } from '@angular/core';

import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';
import { PessoasComponent } from './pessoas/pessoas.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>My First Angular App</h1>
      <h2>Olá</h2>
      <meu-primeiro-componente></meu-primeiro-componente>
      <pessoa-list></pessoa-list>
      <exemplo-data-binding></exemplo-data-binding>
    `
})
export class AppComponent { }
