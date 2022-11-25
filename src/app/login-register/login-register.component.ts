import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
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
  constructor(private router:Router,private route:ActivatedRoute,private aps:AppService) {
    this.loginForm=new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    })
    this.registerForm = new FormGroup({
      uname:new FormControl(null,Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
   }

   get isAdmin(): boolean {
    return Array.from(this.route.snapshot.url)[0].path.toString() === 'alogin';
  }

  ngOnInit(): void {
    console.log(Array.from(this.route.snapshot.url));
  }
  onLogin(){
    const url=Array.from(this.route.snapshot.url);
    let role=2;
    // if(url[0].path.toString()=='user')
    const formval={
      "email":this.loginForm.get('email').value,
      "password":this.loginForm.get('password').value,
    }
    if(this.isAdmin==true){
      role=1;
      const form=new FormData();
      form.append('mail',this.loginForm.get('email').value);
      form.append('password',this.loginForm.get('password').value);
      form.append('role',role.toString());

      this.aps.authenticateUser(form).subscribe(
        (data)=>{
          localStorage.setItem("token","ajnfknf.adminidafndksfndsf,.token.");
          localStorage.setItem("userType","admin");
          // console.log("value got "+data+" "+data.headers.get('role'));

          this.router.navigate(['admin']);
        },
        (err)=>{
          alert("Invalid credentials for admin login..\n");
          console.log(err);
        }
       )
    }
    else{
      const form=new FormData();
      form.append('mail',this.loginForm.get('email').value);
      form.append('password',this.loginForm.get('password').value);
      form.append('role',role.toString());

      this.aps.authenticateUser(form).subscribe(
        (data)=>{
          localStorage.setItem("token","uafdsd,.userakdfnnd,teitoken");
          localStorage.setItem("userType","user");
          // console.log("value got "+data.headers.get('accept')+" "+data.headers.get('role'));
          this.router.navigate(['user']);
        },
        (err)=>{
          alert("Error in login credentials for user..\n");
          console.log(err);
        }
      )
    }
  }
  onRegister(){
    const form=new FormData();
    form.append('uname',this.registerForm.get('uname').value);
    form.append('mail',this.registerForm.get('email').value);
    form.append('password',this.registerForm.get('password').value);
    this.aps.authenticateRegister(form).subscribe(
    (data)=>{
      alert("user registered!");
      localStorage.setItem("token","uafdsd,.userakdfnnd,teitoken");
      localStorage.setItem("userType","user");
      this.router.navigate(['user']);
    },
    (err)=>{
      alert("Already exists\n");
      console.log(err);
    }
    )

    // console.log(this.registerForm.get('email').value);
    // console.log(this.registerForm.get('password').value);
  }

}
