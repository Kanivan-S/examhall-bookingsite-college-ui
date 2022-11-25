import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { UsersComponent } from './users.component';
const routes:Routes=[
  {
    path:'',
    component:UsersComponent,
    data:{title:'EHall Booking'},

    children:[

      {
        path:'',
        redirectTo:'dashboard',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'EHall Booking dashboard' },
      },
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'EHall Booking dashboard' },
      },

    ]
  },

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }




