import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {


  constructor() { }

  get isAdmin(): boolean {
    return (localStorage.getItem("userType")=="admin");
  }
  get isUser(): boolean {
    return (localStorage.getItem("userType")=="user");
  }

  ngOnInit(): void {

  }

}
