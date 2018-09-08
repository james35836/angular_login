import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { FrontLayoutComponent } from '../front-layout/front-layout.component';



import { UserLoginComponent } from '../user-login/user-login.component';
import { UserRegisterComponent } from '../user-register/user-register.component';

import { FrontRoutesRoutingModule } from './front-routes-routing.module';


const routes: Routes = [
  { path: '', component: FrontLayoutComponent, children: [
  { path: '', component: UserLoginComponent },
    { path: 'login', component: UserLoginComponent },

    { path: 'register', component: UserRegisterComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  declarations: []
})
export class FrontRoutesModule { }
