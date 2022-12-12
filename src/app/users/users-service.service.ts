import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { API } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) {}

  fetchuserhistory(form:FormData){
    return this.http.post<any>(`${API}/fetch/userhistory`,form,{observe:'response'});
  }
  fetchRejectuserhistory(form:FormData){
    return this.http.post<any>(`${API}/fetch/rejecthistory`,form,{observe:'response'});

  }
}
