import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  myname:string='';

  constructor(private router: Router,private aps:AppService) {}

  ngOnInit(): void {
    if(localStorage.getItem("userName")!=null){
      this.myname=localStorage.getItem("userName");
    }
    else{
      this.myname="Username";
    }
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  onLogout(){
    this.aps.logout();
  }
}
