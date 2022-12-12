import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { UsersComponent } from './users.component';
import { HistoryComponent } from './history/history.component';
import { RejectHistoryComponent } from './reject-history/reject-history.component';
const routes:Routes=[
  {
    path:'',
    component:UsersComponent,
    data:{title:'EHall Booking'},

    children:[

      {
        path:'',
        redirectTo:'home',
      },
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'EHall Booking dashboard' },
      },
      {
        path: 'history',
        component: HistoryComponent,
        data: { title: 'EHall Booking History' },
      },
      {
        path: 'rejecthistory',
        component: RejectHistoryComponent,
        data: { title: 'EHall Booking History' },
      },
      {
        path:"**",
        redirectTo:'home',

      }

    ]
  },

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }




