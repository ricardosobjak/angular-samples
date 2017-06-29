import { Component } from '@angular/core';

@Component({
  selector: 'turma-do-chaves-componente',
  template: `
    <div style="background-color: #ddd; padding: 10px">
      <h2>Componente TURMA DO CHAVES!</h2>
      <router-outlet></router-outlet>
    </div>
  `
})
export class TurmaDoChavesComponent { }
