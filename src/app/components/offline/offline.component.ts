import { Component, OnInit } from '@angular/core';

import { AfoListObservable, AngularFireOffline } from 'angularfire2-offline';
import {FirebaseService} from '../../services/firebase.service';


@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.css']
})
export class OfflineComponent implements OnInit {


	olistings:any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
  this.firebaseService.getafoListings().subscribe(listings=>{
  console.log(listings);
  this.olistings=listings;
  }); 
  }

/*
  items: AfoListObservable<any[]>;
  constructor(afo: AngularFireOffline) {
    this.items = afo.database.list('/items');
  }

  ngOnInit() {
  }  */

}
