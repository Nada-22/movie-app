import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  getToken() {
    return localStorage.getItem('access_token');
  }
  logout() {
    return localStorage.removeItem('access_token');
  }
  isLogin() {
    return(localStorage.getItem('access_token')) ?  true : false;
 }
}
