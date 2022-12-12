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
interface roomdetails{
  [x: string]: any;
  sno:number;
  rid:string;
  rname:string;
  rinfo:string;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit,OnInit {
  categories:Catgory[]=[];
  getAvailable_roomForm:FormGroup;
  displayedColumns:string[]=['SNO','Room_Name','Description','btn_bookme'];
  Availroomlist :roomdetails[]=[];
  dataSource = new MatTableDataSource<roomdetails>();
  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }


  constructor(private router:Router,private route:ActivatedRoute,private adser:AdminService) {
    // const currentYear = new Date().getFullYear();
    // this.minDate = new Date(currentYear+ 0,new Date().getMonth()  ,new Date().getDate());
    // this.maxDate = new Date(currentYear + 1, 11, 31);



    this.getAvailable_roomForm=new FormGroup({
      selectFormControl : new FormControl('', Validators.required),
      sdate:new FormControl('',[Validators.required]),
      fromtime:new FormControl('',[Validators.required]),
      totime:new FormControl('',[Validators.required])
    })
  }
  get isAdmin(): boolean {
    return (localStorage.getItem("userType")=="admin");
  }
  availablerooms_list(){

    if(this.isAdmin==true){
      const role="1";
      const room_aval=new FormData();
      room_aval.append('cid',this.getAvailable_roomForm.get('selectFormControl').value);
      room_aval.append('sdate',this.getAvailable_roomForm.get('sdate').value);
      room_aval.append('fromtime',this.getAvailable_roomForm.get('fromtime').value);
      room_aval.append('totime',this.getAvailable_roomForm.get('totime').value);
      room_aval.append("role",role);
      this.adser.fetchAvailRooms(room_aval).subscribe(
        (data)=>{
          if(data.body.availrooms.length===0){alert("Rooms Not available");}
          else{ alert("Rooms available");}


        this.Availroomlist=data.body.availrooms;
        this.dataSource.data=this.Availroomlist.map((c,index)=>{
          return {
            sno:index+1,
            rid:c._id,
            rname:c.rname,
            rinfo:c.rinfo,
          }
        })
        },
        (err)=>{
          this.Availroomlist=[];
          alert("Error in getting available  Rooms : "+err);
        }
      )

    }

    }

    changingevent(){

      if(this.getAvailable_roomForm.valid){
        this.availablerooms_list();
      }
      else{
        console.log("invalid");
      }
    }

    bookroom(roomid){
      const role="1";
      const room_book=new FormData();
      room_book.append('role',"1");
      room_book.append('userid',localStorage.getItem("token"));
      room_book.append('rid',roomid);
      room_book.append('catid',this.getAvailable_roomForm.get('selectFormControl').value);
      room_book.append('sdate',this.getAvailable_roomForm.get('sdate').value);
      room_book.append('starttime',this.getAvailable_roomForm.get('fromtime').value);
      room_book.append('endtime',this.getAvailable_roomForm.get('totime').value);
      this.adser.bookrooms(room_book).subscribe(
        (data)=>{

        alert(data.body.message);
        this.availablerooms_list();

        },
        (err)=>{
          alert("Error in Adding  Rooms : "+err);
        }
      )
    }
    ngOnInit( ): void {
    this.adser.getCategories().subscribe(
      (data:any)=>{
        this.categories=data;
      }
    )
    }
    ngAfterViewInit(): void {
      this.dataSource.paginator=this.paginator;
    }


  }



  // minDate: Date;
  // maxDate: Date;
  // myFilter = (d: Date | null): boolean => {
  //   const day = (d || new Date()).getDay();
  //   // Prevent Sunday from being selected.
  //   return day !== 0
  // };




