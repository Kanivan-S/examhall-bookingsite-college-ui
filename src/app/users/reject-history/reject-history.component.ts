import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServiceService } from '../users-service.service';
import { MatTableDataSource } from "@angular/material/table";
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
import { map } from 'rxjs/operators';
interface user_rejecthistory{
  sno:number;
  catname:string;
  rname:string;
  sdate:string;
  fromtime:string;
  totime:string;
}
@Component({
  selector: 'app-reject-history',
  templateUrl: './reject-history.component.html',
  styleUrls: ['./reject-history.component.scss']
})
export class RejectHistoryComponent implements OnInit {
  rejecthistory_list:user_rejecthistory[]=[];

  displayedColumns:string[]=['SNO','Category','Room','Date','Start',"End"];
  dataSource = new MatTableDataSource<user_rejecthistory>();
  constructor(private router:Router,private route:ActivatedRoute,private uservice:UsersServiceService) {}


  ngOnInit(): void {
    this.fecthuserRejectHistory(localStorage.getItem("token"));
  }
  fecthuserRejectHistory(uid){
    const userinfo=new FormData();
    userinfo.append('role',(localStorage.getItem('userType')=="user")?"2":"0");
    userinfo.append('uid',uid);
    this.uservice.fetchRejectuserhistory(userinfo).subscribe(
      (data)=>{
        if(data.body.flag=="1"){
          this.rejecthistory_list=data.body.rejectlist;
          console.log(this.rejecthistory_list);
          this.dataSource.data=this.rejecthistory_list.map((c,index)=>{
            return{
              sno:index+1,
              catname:c.catname,
              rname:c.rname,
              sdate:c.sdate,
              fromtime:c.fromtime,
              totime:c.totime,

            }
          })
        }
        else{
          alert(data.body.message);
        }

      },
      (err)=>{
        alert("Error in fetching History :"+err);
      }
    )
  }

}
