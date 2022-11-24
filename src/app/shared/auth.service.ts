import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedin(){
    return !!localStorage.getItem('token');
  }

  constructor() { }
}
