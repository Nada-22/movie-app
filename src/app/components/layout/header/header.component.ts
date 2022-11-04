import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private _authService:AuthService) { }
  isLogged = this._authService.isLogin() ;
  ngOnInit(): void {
    //console.log(this.isLogged);
    
  }
  logout(): void {
    this._authService.logout();
}
}
