import { Injectable } from '@angular/core';
import { DEFAULT_API } from '../app.const';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private currentTokenSubject: BehaviorSubject<string>;
  public currentToken: Observable<string>;

  constructor(private http: HttpClient) {
    this.currentTokenSubject = new BehaviorSubject<string>(
      localStorage.getItem('token')
    );
    this.currentToken = this.currentTokenSubject.asObservable();
  }

  getHttpOptions(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  public login = (login: string, password: string) => {
    const toAdd = JSON.stringify({ email: login, password });

    return this.http.post(DEFAULT_API + 'login', toAdd, {
      headers: this.getHttpOptions(),
    });
  };

  public get currentTokenValue(): string {
    return this.currentTokenSubject.value;
  }

  public set currentTokenValue(token: string) {
    this.currentTokenSubject.next(token);
  }

  public isLogged(): boolean {
    return !isNullOrUndefined(this.currentTokenSubject.value);
  }

  public logout() {
    localStorage.removeItem('token');
    this.currentTokenValue = null;
  }
}
