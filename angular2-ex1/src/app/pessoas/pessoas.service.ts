import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Pessoa } from './pessoa.model';

@Injectable()
export class PessoasService {

  private actionUrl: string;
  private headers: Headers;

  constructor(private _http: Http) {

    this.actionUrl = 'http://localhost:8080/webapp-vraptor-jwt/api/pessoa/';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }


  public getAll = (): Observable<Pessoa[]> => {
    console.log(this.actionUrl);

    return this._http.get(this.actionUrl, { headers: this.headers })
      .map((response: Response) => <Pessoa[]>response.json())
      .catch(this.handleError);
  }

  getPessoas(): string[] {
    return ['João', 'Ana', 'Juca'];
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
