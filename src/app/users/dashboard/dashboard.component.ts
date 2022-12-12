import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
interface Catgory{
  id:string;
  catname:string;
}
interface resp{
  msg:String;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  addcategoryform:FormGroup;
  addroomform:FormGroup;
  // formerror:string;


  categories:Catgory[];

  constructor(private router:Router,private route:ActivatedRoute,private adser:AdminService) {
    this.addcategoryform=new FormGroup({
      addcatname:new FormControl('',[Validators.required]),
      addcatinfo:new FormControl(null,Validators.required)
    })
    this.addroomform=new FormGroup({
      selectFormControl : new FormControl('', Validators.required),
      addroomname :new FormControl('',[Validators.required]),
      addroominfo:new FormControl('',[Validators.required]),
    })
   }

   get isAdmin(): boolean {
    return (localStorage.getItem("userType")=="admin");
  }
  get isUser():boolean{
    return (localStorage.getItem("userType")=="user");
  }


   onNewCategory(){
    const adminid=localStorage.getItem("token");
    if(this.isUser==true){
      const role="2";
      const catform=new FormData();
      catform.append('catname',this.addcategoryform.get('addcatname').value);
      catform.append('catinfo',this.addcategoryform.get('addcatinfo').value);
      catform.append('role',role);
      this.adser.addNewCategory(catform).subscribe(
        (data)=>{
         alert(data.body.message);
        },
        (err)=>{
          alert("Error in creating category : "+err);
          console.log(err);

        }
      )
    }
    else{
      alert("Error in ur login relogin..\n");
    }
   }
   onNewRoom(){
    if(this.isUser==true){
      const role="2";
      const roomform=new FormData();
      roomform.append('rname',this.addroomform.get('addroomname').value);
      roomform.append('rinfo',this.addroomform.get('addroominfo').value);
      roomform.append('cid',this.addroomform.get('selectFormControl').value);
      roomform.append('role',role);
      this.adser.addNewRoom(roomform).subscribe(
        (data)=>{
        alert(data.body.message);
        },
        (err)=>{
          alert("Error in Adding  Rooms : "+err);
        }
      )

    }

   }



  ngOnInit( ): void {
    this.adser.getCategories().subscribe(
      (data:any)=>{
        this.categories=data;
      }
    )
  }

}
