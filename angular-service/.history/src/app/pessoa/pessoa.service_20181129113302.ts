import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { HttpErrorHandler, HandleError } from '../../../http-error-handler.service';

import { API_BASE } from '../configs';

import { Pessoa } from './pessoa.model';
import { AuthService } from '../auth/auth.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDM1MDAxNDcsInVzZXIiOjEsImlhdCI6MTU0MzQ5ODM0N30.rUsyElsG3Fvoyaykix2la_s_TaCPyfTwPwNtXdnjX-w'
  })
};

@Injectable()
export class PessoaService {
  private actionUrl = API_BASE + 'pessoa';
  token: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.auth("james@utfpr.edu.br", "1234")
      .subscribe(
        (res: string) => this.token = res,
        (error) => console.log(error),
        () => console.log(this.token)
      );
  }



  // Faz a invocação de um recurso HTTP
  public getAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.actionUrl, { headers: httpOptions.headers }).pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json() || "Server error");
  }

  getPessoas(): string[] {
    return ["Juca", "Ana", "Mafalda"]
  }
}
