import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input()
  public value: number;

  @Output('change')
  changeEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  aumentar() {
    this.value++;
    this.changeEmitter.emit(this.value);
  }

  diminuir() {
    this.value--;
    this.changeEmitter.emit(this.value);
  }

}
