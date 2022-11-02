import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.API_Domain;

  constructor(private http: HttpClient) { }
  signUp(user: User): Observable<any> {
    return this.http.post(`${this.url}/api/register`, user);
  }
  logIn(user: User): Observable<any> {
    return this.http.post(`${this.url}/api/login`, user);
  }
}
