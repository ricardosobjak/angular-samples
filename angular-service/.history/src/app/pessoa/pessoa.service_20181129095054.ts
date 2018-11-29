import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../../http-error-handler.service';

import { API_BASE } from '../configs';

import { Pessoa } from './pessoa.model';
import { AuthService } from '../auth/auth.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: localStorage.getItem('token')
  })
};

@Injectable()
export class PessoaService {
  private actionUrl = API_BASE + 'pessoa';
  private headers: Headers = new Headers();
  private token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjM5MzM2ODIsInVzZXIiOjEyLCJpYXQiOjE1MjM5MzE4ODJ9.-3ZGENNKwRexAUn0jIxvZHCbU5G2uWJIlCSmlZa-tTY';

  constructor(private _http: Http, private authService: AuthService) {
    this.headers.append('Authorization', this.token);
    this.headers.append('Content-type', 'application/json');
    this.headers.append('Accept', 'application/json');

    this.authService.auth("james@utfpr.edu.br", "1234")
      .subscribe(
        (res: string) => this.token = res,
        (error) => console.log(error),
        () => console.log(this.token)
      );
  }



  // Faz a invocação de um recurso HTTP
  public getAll = (): Observable<Pessoa[]> => {
    console.log(this.headers);
    return this._http.get(this.actionUrl, { headers: this.headers })
      .map((res: Response) => <Pessoa[]>res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || "Server error");
  }

  getPessoas(): string[] {
    return ["Juca", "Ana", "Mafalda"]
  }
}
