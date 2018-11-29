import { Component } from '@angular/core';

import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';
import { PessoasComponent } from './pessoas/pessoas.component';

@Component({
  selector: 'my-app',
  template: `
      <div class="jumbotron">
        <h1>My First Angular App</h1>
      </div>
      <hr/>
      <meu-primeiro-componente></meu-primeiro-componente>
      <hr/>
      <pessoa-list></pessoa-list>
      <hr/>
      <exemplo-data-binding></exemplo-data-binding>
    `
})
export class AppComponent { }
