import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'exemplo-data-binding',
  templateUrl: 'data-binding.component.html',
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ],
  styleUrls: ['data-binding.component.css']
})
export class DataBindingComponent {
  url = 'http://www.utfpr.edu.br';
  urlImg = 'http://lorempixel.com/400/200';

  conteudoAtual: string = '';
  conteudoSalvo: string = '';
  isMouseover = false;
  nome: string = '';

  show: boolean = true; //Ex. Diretiva NgIf

  getValor() {
    return 1;
  }

  cliqueDoBotao() {
    alert('Botão clicado');
  }

  onKeyup(event: KeyboardEvent) {
    console.log(event);
    this.conteudoAtual = (<HTMLInputElement>event.target).value;
  }

  onSave(valor: string) {
    this.conteudoSalvo = valor;
  }

  onToggleHover() {
    this.isMouseover = !this.isMouseover;
  }
}
