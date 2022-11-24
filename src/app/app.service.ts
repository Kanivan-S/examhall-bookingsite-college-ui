import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) {}

  authenicateUser(form :FormData){
    console.log("Calling app.service ..."+form.get('email'));
    return this.http.post<any>(`${API}/authenticate/login`,form,{observe:'response'});
  }
  authenicateRegister(){
    console.log("Calling authenicateRegister ...\n");
    return this.http.get<any>(`${API}/users/gotten`);

  }

}
