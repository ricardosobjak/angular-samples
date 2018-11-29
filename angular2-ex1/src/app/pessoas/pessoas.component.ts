import { Component } from '@angular/core';

import { Pessoa } from './pessoa.model';
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
  pessoas: string[] = [];
  pessoasRest: Pessoa[];

  constructor(private pessoasService: PessoasService) {
    this.pessoas = pessoasService.getPessoas();
  }

  ngOnInit() {
    this.getAllItems();
  }

  private getAllItems(): void {
    this.pessoasService
      .getAll()
      .subscribe(
      (data: Pessoa[]) => this.pessoasRest = data, //Function for next element
      (error) => console.log(error), //Error function
      () => { console.log(this.pessoasRest); } //Complete function
      );
  }
}
