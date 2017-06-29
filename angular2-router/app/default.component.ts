import { Component } from '@angular/core';

@Component({
  selector: 'default-componente',
  template: `
    <div style="background-color: #ccc; padding: 10px">
      <h2>Componente DEFAULT</h2>
      <p>Caso nenhum outro componente seja chamado, este aparecerá dentro do AppComponent!</p>
    </div>
  `
})
export class DefaultComponent { }
