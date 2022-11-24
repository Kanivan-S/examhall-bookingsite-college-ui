import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router :Router){}
  canActivate(){
    let Role=localStorage.getItem("userType");
    if(Role=="admin"){
      return true;
    }
    alert("You dont have rights login to admin page!");
    this.router.navigate(['alogin']);
    return false;

  }

}
