import { Component } from '@angular/core';

import { PessoasService } from './pessoas.service';

@Component({
  moduleId: module.id,
  selector: 'pessoa-list',
  /*
  template: `
    <p>Lista de Pessoas</p>
    <p>Meu nome é {{ nome }}</p>
    <ul>
      <li *ngFor="let pessoa of pessoas">{{ pessoa }}</li>
    </ul>
  `
  */
  templateUrl: 'pessoas.component.html',
  providers: [PessoasService]
})

export class PessoasComponent {
  nome = "Ricardo Sobjak";
  pessoas : string[] = [];

  constructor(pessoasService: PessoasService) {
    //pessoasService = new PessoasService();
    this.pessoas = pessoasService.getPessoas();
  }
}
