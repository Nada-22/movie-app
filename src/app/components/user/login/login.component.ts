import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute, private router: Router,private userService: UserService) {
    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
  }
  get f() { return this.loginForm.controls; }

  logIn() {
    this.userService.logIn({email:'test24@test.com',password:'aghed11'}).subscribe(
      (res: any) => {
        console.log(res);
        console.log(res.authorisation.token);
        localStorage.setItem('access_token',res.authorisation.token)
        
      }, (err: any) => {
        console.log(err);
        
      }
    )
  }
}
