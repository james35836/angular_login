import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { CarewellDashboardComponent } from '../carewell-dashboard/carewell-dashboard.component';


import { CarewellLayoutComponent } from '../carewell-layout/carewell-layout.component';
import { CarewellPlanComponent } from '../carewell-plan/carewell-plan.component';

const routes: Routes = [
  { path: '', component: CarewellLayoutComponent, children: [
  	{ path: 'admin', component: CarewellDashboardComponent },
  	{ path: 'admin/dashboard', component: CarewellDashboardComponent },
  	{ path: 'admin/plan', component: CarewellPlanComponent },
  	] },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  declarations: []
})
export class CarewellRoutingModule { }
