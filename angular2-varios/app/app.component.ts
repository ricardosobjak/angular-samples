import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div style="background-color: #efefef; padding: 10px">
      <h1>Exemplo de uso do Roteamento</h1>
      <p>Este é o AppComponent</p>
      <ul>
        <li><a [routerLink]="['']">Início</a></li>
        <li><a [routerLink]="['componente1']">Componente 1</a></li>
        <li><a [routerLink]="['/componente2']">Componente 2</a></li>
        <li>
          <a [routerLink]="['/turmadochaves']">Turma do Chaves</a>
          <ul>
            <li><a [routerLink]="['/turmadochaves/quico']">Quico</a></li>
            <li><a [routerLink]="['/turmadochaves/madruga']">Seu Madruga</a></li>
          </ul>
        </li>
      </ul>
      <hr/>
      <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent { }
