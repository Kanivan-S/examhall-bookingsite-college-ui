import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { AuthGuard } from './shared/auth.guard';
import { RoleGuard } from './shared/role.guard';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'alogin',component:LoginRegisterComponent},

  { path: 'login', component:LoginRegisterComponent },
  {
    path: 'admin',
    canActivate:[RoleGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((mod) => mod.AdminModule),

  },
  {
    path:'users',
    canActivate:[AuthGuard],
    component:UsersComponent,
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
