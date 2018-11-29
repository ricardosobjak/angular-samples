import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { API_BASE } from '../configs';

import { Pessoa } from '../pessoa/pessoa.model';

@Injectable()
export class AuthService {
  private actionUrl = API_BASE + 'auth';
  private headers: Headers = new Headers();
  private token:string;

  constructor(private _http:Http) {
    this.headers.append('Content-type','application/json');
  }

  // Faz a invocação de um recurso HTTP
  public auth = (email:string, senha:string): Observable<string> => {
    let body = {'email': email, 'senha': senha};

    const options = {
      headers: this.headers,
      responseType: ResponseContentType.Text
    };

    return this._http.post(this.actionUrl, body, options)
      .map((res:Response) => res.text());
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || "Server error");
  }
}
