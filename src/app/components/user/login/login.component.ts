import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;

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

  logIn():void {
    this.submitted = true;
    console.log(this.loginForm.value);
    
    this.userService.logIn(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        if (res.status == 'success') {
          Swal.close();
        console.log(res.authorisation.token);
        localStorage.setItem('access_token', res.authorisation.token)
          this.router.navigate(['/movies']);
          
        }
        
      }, (err: any) => {
        console.log(err);
        Swal.close();
        if (err.status === 401) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'email or password Incorrect',
            showConfirmButton: true,
            // timer: 2000
          })
        }

        
      }
    )
    // Swal.fire({
    //   title: 'Loading ...',
    
    //   timerProgressBar: true,
    //   didOpen: () => {
    //     Swal.showLoading()
      
    //     this.userService.logIn(this.loginForm.value).subscribe(
    //       (res: any) => {
    //         console.log(res);
    //         if (res.status == 'success') {
    //           Swal.close();
    //         console.log(res.authorisation.token);
    //         localStorage.setItem('access_token', res.authorisation.token)
    //           this.router.navigate(['/movies']);
              
    //         }
            
    //       }, (err: any) => {
    //         console.log(err);
    //         Swal.close();
    //         if (err.status === 401) {
    //           Swal.fire({
    //             position: 'center',
    //             icon: 'error',
    //             title: 'email or password Incorrect',
    //             showConfirmButton: true,
    //             // timer: 2000
    //           })
    //         }

            
    //       }
    //     )
    //   }
    // })
   
    
  }
}
