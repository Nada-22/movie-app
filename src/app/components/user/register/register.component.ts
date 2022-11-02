import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute, private router: Router,private userService: UserService) {
    
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
  }
  get f() { return this.signUpForm.controls; }

  signUp() {
    this.submitted = true;
    console.log(this.signUpForm.value);
    
    this.userService.signUp(this.signUpForm.value).subscribe(
      (res: any) => {
        console.log(res);
        if(res.status == 'success'){
        console.log(res.authorisation.token);
        localStorage.setItem('access_token', res.authorisation.token);
        this.router.navigate(['/movies']);
      }
        
      }, (err: any) => {
        console.log(err);
        
      }
    )
  }
}
