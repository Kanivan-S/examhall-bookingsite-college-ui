import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { AdminHistoryComponent } from './admin-history/admin-history.component';
import { UsersStatusComponent } from './users-status/users-status.component';
const routes:Routes=[
  {
    path:'',
    component:AdminComponent,
    data:{title:'EHall Booking'},

    children:[

      {
        path:'',
        redirectTo:'newadding',
      },
      {
        path: 'newadding',
        component: DashboardComponent,
        data: { title: 'EHall Addings' },
      },
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'EHall Booking ' },
      },
      {
        path: 'history',
        component: AdminHistoryComponent,
        data: { title: 'EHall Booking History' },
      },
      {
        path: 'userstatus',
        component: UsersStatusComponent,
        data: { title: 'EHall User Status' },
      },
      {
        path: '**',
       redirectTo:'newadding',

      }

    ]
  },

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }




