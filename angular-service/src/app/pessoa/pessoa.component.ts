import { Component } from '@angular/core';
import { PessoaService } from './pessoa.service';

import { Pessoa } from './pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html'
})
export class PessoaComponent {
  nome:string = 'Ricardo';
  nomes:string[];
  pessoas:Pessoa[];

  constructor(private pessoaService:PessoaService) {
    this.nomes = pessoaService.getPessoas();
  }

  ngOnInit() {
    this.getPessoas();
    console.log(this.pessoas);
  }

  private getPessoas(): void {
    this.pessoaService.getAll().subscribe(
      (data:Pessoa[]) => this.pessoas = data,
      (error) => console.log(error),
      () => console.log(this.pessoas)
    );
  }
}
