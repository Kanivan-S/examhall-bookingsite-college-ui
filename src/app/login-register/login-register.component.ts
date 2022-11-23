import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
/** Error when invalid control is dirty, touched, or submitted. */



@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  loginError:string;
  logo:string;


  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  constructor(private router:Router,private route:ActivatedRoute) {
    this.loginForm=new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    })
    this.registerForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });



   }

   get isAdmin(): boolean {
    return Array.from(this.route.snapshot.url)[0].path.toString() === 'admin';
  }

  ngOnInit(): void {
  }
  onLogin(){
    console.log(this.loginForm.get('email').value);
    console.log(this.loginForm.get('password').value);
  }
  onRegister(){
    console.log(this.registerForm.get('email').value);
    console.log(this.registerForm.get('password').value);

  }

}
