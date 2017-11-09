import { Injectable } from '@angular/core';

@Injectable()
export class PessoasService {
  getPessoas() : string[] {
    return ['João', 'Ana', 'Juca'];
  }
}
