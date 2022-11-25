import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { API } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) {}

  authenticateUser(form :FormData){
    console.log("Calling app.service ..."+form.get('email'));
    return this.http.post<any>(`${API}/authenticate/login`,form,{observe:'response'});
  }
  authenticateRegister(form :FormData){
    console.log("Calling authenicateRegister ...\n");
    return this.http.post<any>(`${API}/authenticate/register`,form,{observe:'response'});
  }
  logout(){
    localStorage.clear();
     const turl=((this.router.url).toString()).split("/");
     if(turl[1]=="admin"){
      this.router.navigateByUrl('/alogin');
     }
     else{
      this.router.navigateByUrl('/login');
     }
  }
}
