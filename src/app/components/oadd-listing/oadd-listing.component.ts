import { Component, OnInit } from '@angular/core';

import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

import {AngularFire, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';

import * as firebase from 'firebase';


@Component({
  selector: 'app-oadd-listing',
  templateUrl: './oadd-listing.component.html',
  styleUrls: ['./oadd-listing.component.css']
})
export class OaddListingComponent implements OnInit 
{

  bedrooms:any;
city:any;
image:any;
owner:any;
path:any;
price:any;
title:any;
type:any;


  constructor(
private firebaseService:FirebaseService,
private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit()
  {

    


  		console.log('offline adding');

  		//console.log(this.title);


  		let listing=
  		{

  			title:this.title,
  			city:this.city,
  			owner:this.owner,
  			bedrooms:this.bedrooms,
  			price:this.price,
  			type:this.type
  		}
  		

  	this.firebaseService.oaddListing(listing); 
  	this.router.navigate(['offline']);

  }
}
