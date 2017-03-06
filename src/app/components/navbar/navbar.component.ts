import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';

import {AngularFire} from 'angularfire2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public af:AngularFire,public flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

login()
{
	this.af.auth.login();
}

logout()
{
	this.af.auth.logout();
	this.flashMessage.show('You are logged out' , {cssClass:'alert-success',timeout:3000})
}
}
