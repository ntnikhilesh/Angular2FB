import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import {RouterModule,Routes} from '@angular/router'

import {FlashMessagesModule} from 'angular2-flash-messages';

import {FirebaseService} from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';


export const firebaseConfig={
  apiKey: "AIzaSyCfkmHro253j3x-qIX9OSanrejW4SHWcwc",
    authDomain: "proplistings-969e9.firebaseapp.com",
    databaseURL: "https://proplistings-969e9.firebaseio.com",
    storageBucket: "proplistings-969e9.appspot.com",
    messagingSenderId: "766663621983"
    };


const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes:Routes=[
{path:'', component:HomeComponent},
{path:'listings',component:ListingsComponent},
{path:'listing/:id', component:ListingComponent},
{path:'add-listings',component:AddListingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
