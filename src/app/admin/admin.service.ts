import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { API } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) {}

  addNewCategory(form:FormData){
    console.log("Calling addNewCategory ..\n");
    return this.http.post<any>(`${API}/admin/addnewCategory`,form,{observe:'response'});
  }
  getCategories() {
    return this.http
        .get<any>(`${API}/admin/getCategory`);
    }
  getRoomlistforCatid(form:FormData){
    return this.http.post<any>(`${API}/admin/getRooms`,form,{observe:'response'});

  }
  addNewRoom(form:FormData){
    return this.http.post<any>(`${API}/admin/addNewRoom`,form,{observe:'response'});
  }
  fetchAvailRooms(form:FormData){
    return this.http.post<any>(`${API}/fetch/availrooms`,form,{observe:'response'});
  }
  bookrooms(form:FormData){
    return this.http.post<any>(`${API}/fetch/bookroom`,form,{observe:'response'});
  }

  getRoomStatusList(form:FormData){
    return this.http.post<any>(`${API}/admin/roomstatusList`,form,{observe:'response'});
  }
  rejectbooking(form:FormData){
    return this.http.post<any>(`${API}/admin/rejectBooking`,form,{observe:'response'});
  }

}
