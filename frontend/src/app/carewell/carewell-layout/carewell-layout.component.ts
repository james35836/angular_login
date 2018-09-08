import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { User } from '../../user';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import 'bootstrap';
import Swiper from 'swiper';

@Component({
  selector: 'app-carewell-layout',
  templateUrl: './carewell-layout.component.html',
  styleUrls: ['./carewell-layout.component.scss']
})
export class CarewellLayoutComponent implements OnInit 
{
	auth   					 	= localStorage.getItem('auth');
	type						= localStorage.getItem('type');
	user    					= null;
	headers 					= null;
	messages              : any = null;
	send_message                = {};
	


	constructor(private userService: UserService, private rest: UserService, private router: Router, private http: HttpClient)
	{ 
		if (!this.auth) 
		{
			this.router.navigate(['/admin/login']);
		}

		if (this.type !='member')
		{
			this.router.navigate(['/'+this.type]);
		}

		
	}

	
	ngOnInit() 
	{
		
		
		this.getUserData(this.auth);
		
	}
	onLogout()
	{
		alert();
		this.http.post(this.userService.domain + "/api/logout", {}, 
		{
			headers: this.headers
		})
		.subscribe(response =>
		{
			localStorage.removeItem('auth');
			localStorage.removeItem('type');
			localStorage.removeItem('member');

			this.router.navigate(['/']);
		},
		error =>
		{
			console.log(error);
		});
	}
	hideDropdown()
	{
		$(".dropdown").addClass("hidden");

		setTimeout(function()
		{
			$(".dropdown").removeClass("hidden");
		}, 500);
	}
	makeid() 
	{
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (var i = 0; i < 5; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}
	getUserData(accessToken: string) 
	{
	    this.userService.getUserData(accessToken)
        .subscribe(user_data => 
        {
            this.user = user_data;
            var id = this.user.id
            var id_length = id.toString().length;
            localStorage.setItem('identification', this.makeid()+this.user.id);
            localStorage.setItem('id', id_length);
            this.router.navigate(['/admin']);
        },
        error =>
        {
        	localStorage.removeItem('auth');
        	localStorage.removeItem('type');
        	localStorage.removeItem('member');
			this.router.navigate(['/login']);
        });

    }

    
    

	
}
