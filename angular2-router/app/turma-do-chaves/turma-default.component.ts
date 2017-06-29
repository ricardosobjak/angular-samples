import { Component } from '@angular/core';

@Component({
  selector: 'turma-default-componente',
  template: `
    <div style="background-color: #ccc; padding: 10px">
      <h3>Componente Default da turma do Chaves</h3>
      <p>Caso nenhum outro subcomponente seja chamado, então este aqui aparecerá!</p>
    </div>
  `
})
export class TurmaDefaultComponent { }
