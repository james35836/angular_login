
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../user.service';
import * as $ from 'jquery';
import 'bootstrap';


import { CarewellLayoutComponent } from '../carewell-layout/carewell-layout.component';


@Component({
  selector: 'app-carewell-plan',
  templateUrl: './carewell-plan.component.html',
  styleUrls: ['./carewell-plan.component.scss']
})
export class CarewellPlanComponent implements OnInit 
{
	headers 				: any = null;

	constructor(private userService: UserService, private rest: UserService, private http: HttpClient, private layout: CarewellLayoutComponent, private toastr: ToastrService) 
	{

	}

	ngOnInit() 
	{
		
	}
	create_plan()
	{
		$("#createPlanModal").modal();
	}
}


