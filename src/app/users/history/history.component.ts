import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServiceService } from '../users-service.service';
import { MatTableDataSource } from "@angular/material/table";
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
import { map } from 'rxjs/operators';
interface user_bookhistory{
  sno:number;
  catname:string;
  rname:string;
  sdate:string;
  fromtime:string;
  totime:string;
  status:string;

}
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history_list:user_bookhistory[]=[];

  displayedColumns:string[]=['SNO','Category','Room','Date','Start',"End","Status"];
  dataSource = new MatTableDataSource<user_bookhistory>();
  constructor(private router:Router,private route:ActivatedRoute,private uservice:UsersServiceService) {}

  ngOnInit(): void {
    this.fetchuserhis(localStorage.getItem("token"));
  }
  fetchuserhis(uid){
    const userinfo=new FormData();
    userinfo.append('role',(localStorage.getItem('userType')=="user")?"2":"0");
    userinfo.append('uid',uid);
    this.uservice.fetchuserhistory(userinfo).subscribe(
      (data)=>{
        if(data.body.flag=="1"){
          this.history_list=data.body.historylist;
          console.log(this.history_list);
          this.dataSource.data=this.history_list.map((c,index)=>{
            return{
              sno:index+1,
              catname:c.catname,
              rname:c.rname,
              sdate:c.sdate,
              fromtime:c.fromtime,
              totime:c.totime,
              status:c.status,

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
