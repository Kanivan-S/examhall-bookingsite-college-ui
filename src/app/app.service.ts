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
    console.log("Calling app.service ...\n");
    return this.http.post(`${API}/users/login`,form,{observe:'response'});
  }

}
