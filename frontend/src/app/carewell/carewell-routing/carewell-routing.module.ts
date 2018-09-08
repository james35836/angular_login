import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { CarewellDashboardComponent } from '../carewell-dashboard/carewell-dashboard.component';


import { CarewellLayoutComponent } from '../carewell-layout/carewell-layout.component';

const routes: Routes = [
  { path: '', component: CarewellLayoutComponent, children: [
  	{ path: 'admin', component: CarewellDashboardComponent },
  	{ path: 'admin/dashboard', component: CarewellDashboardComponent },
  	] },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  declarations: []
})
export class CarewellRoutingModule { }
