import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { API_BASE } from '../configs';

import { Pessoa } from '../pessoa/pessoa.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable()
export class AuthService {
  private actionUrl = API_BASE + 'auth';
  private token: string;

  constructor(private http: HttpClient) {

  }

  // Faz a invocação de um recurso HTTP
  public auth (email: string, senha: string): Observable<string> {
    const body = { 'email': email, 'senha': senha };

    return this.http.post(this.actionUrl, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json() || "Server error");
  }
}
