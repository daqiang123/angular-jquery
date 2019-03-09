/*******************************************************************************
 * 版权所有（c）2018，2019，西安大华时代网络科技有限公司。保留所有权利。
 ******************************************************************************/

import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

//declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-jquery';
  
  ngOnInit() {
	$('button').on('click', function(){
		alert("OK");
	});
  }

}
