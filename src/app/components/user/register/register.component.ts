import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

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
      password: ['', [Validators.required,Validators.minLength(5)]],
    });
   }

  ngOnInit(): void {
  }
  get f() { return this.signUpForm.controls; }

  signUp():void {
    this.submitted = true;
    console.log(this.signUpForm.value);
    if (this.signUpForm.invalid) return;
    
    this.userService.signUp(this.signUpForm.value).subscribe(
      (res: any) => {
        console.log(res);
        Swal.close();
        if(res.status == 'success'){
        console.log(res.authorisation.token);
        localStorage.setItem('access_token', res.authorisation.token);
        this.router.navigate(['/movies']);
        } else if (res.status == 'failed') {
          for ( const key in res.message ) {
            this.signUpForm.get(key)?.setErrors( { server: res.message[key] } )
          }
      }
        
      }, (err: any) => {
        Swal.close();
        console.log(err);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Something is error please try again later',
          showConfirmButton: true,
          // timer: 2000
        })
      }
    )
    // Swal.fire({
    //   title: 'Loading ...',
    //   timerProgressBar: true,
    //   didOpen: () => {
    //     Swal.showLoading()
      
    //     this.userService.signUp(this.signUpForm.value).subscribe(
    //       (res: any) => {
    //         console.log(res);
    //         Swal.close();
    //         if(res.status == 'success'){
    //         console.log(res.authorisation.token);
    //         localStorage.setItem('access_token', res.authorisation.token);
    //         this.router.navigate(['/movies']);
    //         } else if (res.status == 'failed') {
    //           for ( const key in res.message ) {
    //             this.signUpForm.get(key)?.setErrors( { server: res.message[key] } )
    //           }
    //       }
            
    //       }, (err: any) => {
    //         Swal.close();
    //         console.log(err);
    //         Swal.fire({
    //           position: 'center',
    //           icon: 'error',
    //           title: 'Something is error please try again later',
    //           showConfirmButton: true,
    //           // timer: 2000
    //         })
    //       }
    //     )
    //   }
    // })
  }
}
