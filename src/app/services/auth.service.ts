import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  
  getToken() {
    return localStorage.getItem('access_token');
  }
  logout() {
    this.router.navigate(['/account']);
    return localStorage.removeItem('access_token');
  }
  isLogin() {
    return(localStorage.getItem('access_token')) ?  true : false;
 }
}
