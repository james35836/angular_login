import { Component, OnInit, OnDestroy } from '@angular/core';
import WOW from 'wow.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.scss']
})

export class FrontLayoutComponent implements OnInit, OnDestroy 
{
	constructor() 
	{ 

	}

	ngOnInit() 
	{
		new WOW().init();

		$('body').on('click',function() 
		{
		  	$('.navbar-collapse').collapse('hide');
		});

		
	}

	ngOnDestroy()
	{
		// $('body').removeClass('bg-front');
	}
}
