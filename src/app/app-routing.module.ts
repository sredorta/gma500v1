import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './_auth/login/login.component';
import {SignupComponent} from './_auth/signup/signup.component';
import {NotifsComponent} from './_messaging/notifs/notifs.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    //canActivate: [LoggedOutGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    //canActivate: [LoggedOutGuard]
  },  
  {
    path: 'notifications',
    component: NotifsComponent,
    //canActivate: [LoggedOutGuard]
  },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
