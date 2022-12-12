import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { MatTableDataSource } from "@angular/material/table";
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
import { MatPaginator } from "@angular/material/paginator";

interface Catgory{
  id:string;
  catname:string;
}
interface perroombookdetails{
  [x: string]: any;
  bookid:string;
  sno:number;
  username:string;
  start:string;
  end:string;
}
interface roomlist{
  id:string,
  rname:String,
}
@Component({
  selector: 'app-users-status',
  templateUrl: './users-status.component.html',
  styleUrls: ['./users-status.component.scss']
})
export class UsersStatusComponent implements OnInit {
  categories:Catgory[]=[];
  roomslist:roomlist[]=[];
  usersstatusform:FormGroup;
  dataSource = new MatTableDataSource<perroombookdetails>();


  perroomstatus:perroombookdetails[]=[];
  displayedColumns:string[]=['SNO','Username','Start','End','Button'];


  constructor(private router:Router,private route:ActivatedRoute,private adser:AdminService) {
    // const currentYear = new Date().getFullYear();
    // this.minDate = new Date(currentYear+ 0,new Date().getMonth()  ,new Date().getDate());
    // this.maxDate = new Date(currentYear + 1, 11, 31);



    this.usersstatusform=new FormGroup({
      selectFormControl : new FormControl('', Validators.required),
      selectFormControlRoom:new FormControl('', Validators.required),
      sdate:new FormControl('',[Validators.required]),
    })
  }

  get isAdmin(): boolean {
    return (localStorage.getItem("userType")=="admin");
  }
  changingevent(){

  }
  rejectBooking(bookid){
    if(this.isAdmin==true){
      const role="1";
      const rejectform=new FormData();
      rejectform.append("role",role);
      rejectform.append("bookid",bookid);
      this.adser.rejectbooking(rejectform).subscribe(
        (data)=>{
          alert(data.body.message);
          this.getRoomStatus();
        },
        (err)=>{
          console.log(err);
          alert(err);
        }
      )
    }
    else{
      alert("Wrong admin credentials");
    }
  }
  getRoomStatus(){

    if(this.isAdmin==true){
      const role="1";
      const perrroomform=new FormData();
      perrroomform.append('cid',this.usersstatusform.get('selectFormControl').value);
      perrroomform.append('rid',this.usersstatusform.get('selectFormControlRoom').value);
      perrroomform.append('sdate',this.usersstatusform.get('sdate').value);
      perrroomform.append('role',role);

      this.adser.getRoomStatusList(perrroomform).subscribe(
        (data)=>{
          if(data.body.count=="0"){
            this.perroomstatus=[];
          }
          else{
            this.perroomstatus=data.body.perroomStatus;
            this.dataSource.data=this.perroomstatus.map((c,index)=>{
              return {
                sno:index+1,
                bookid:c.bookid,
                username:c.username,
                start:c.start,
                end:c.end,
              }
            })
          }
        }
        ,(err)=>{
          this.perroomstatus=[];
          alert("Error in getting Per Room User Status "+err);
        }
      )
    }



  }
  changingcatevent(){
    if(this.isAdmin){
      const getRooms=new FormData();
      getRooms.append('role',"1");
      getRooms.append('catid',this.usersstatusform.get('selectFormControl').value);
       this.adser.getRoomlistforCatid(getRooms).subscribe(
        (data:any)=>{
          this.roomslist=data.body;
        },(err)=>{
          alert("Error in getting rooms list for category");
        }
       )
    }
    else{
      alert("Wrong admin credentials");
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
