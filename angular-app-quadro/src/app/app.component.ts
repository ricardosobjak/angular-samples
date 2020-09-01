import { Component, OnInit } from '@angular/core';
import { TesteService } from './teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-app-quadro';

  constructor(private teste: TesteService) {}

  ngOnInit() {
    this.teste.testar().subscribe(data => console.log(data), error => console.log);
  }
}
