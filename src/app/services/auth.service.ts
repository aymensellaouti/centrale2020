import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import APIS from '../Globals';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(credentials): Observable<any> {
    return this.http.post<any>(APIS.apiLogin, credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }
  isAuthenticated() {
    // il faut qu'il est le token et que le token est valide
    //Token
    //Refresh Token
    return !!localStorage.getItem('token');
  }
}
