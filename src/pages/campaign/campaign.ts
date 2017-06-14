import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { AccountPage } from '../account/account';

@Component({
  selector: 'campaign-page',
  templateUrl: 'campaign.html',
  providers: [ HttpProvider ]
})
export class CampaignPage {
  selectedItem: any;
  person: any;
  profiles: Array<{profile:any}>;
  attending: Array<{aviPath: string, name: string, state: string, city: string, zip: string, interests: string, bio: string, email: string, photo: string}>;
constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.httpProvider.getProfilesJsonData().subscribe((data) => {
      console.log("What is in the data: ", data);
      this.profiles = data;
      this.attending = [];
      for (let i = 0; i < this.profiles.length; i += 1) {
        this.attending.push({
        aviPath: this.profiles[i]["photo"],
        name: this.profiles[i]["name"],
        state: this.profiles[i]["state"],
        city: this.profiles[i]["city"],
        zip: this.profiles[i]["zip"],
        interests: this.profiles[i]["interests"],
        bio: this.profiles[i]["bio"],
        email: this.profiles[i]["email"],
        photo: this.profiles[i]["photo"]
      })
      console.log(this.attending[i]["name"] + this.attending[i]["aviPath"]);
    }
    },
    err => {
      console.log("Error, "+err);
    },
    () => {
      console.log("Completed");
    })
  }

  profileTapped($event, people, httpProvider: HttpProvider){
      console.log("This is the profileTapped() for loop");
      let person = {
        aviPath: "",
        photo:"", //this.attending[i]["photo"],
        name:"", // this.attending[i]["name"],
        state:"", // this.attending[i]["state"],
        city:"", // this.attending[i]["city"],
        zip: "", //this.attending[i]["zip"],
        interests:"", // this.attending[i]["interests"],
        bio:"" , //this.attending[i]["bio"],
        email:"" // this.attending[i]["email"]
    
      }
      for (let i = 0; i < this.profiles.length; i += 1) {
          if(this.attending[i]["name"] === people.name){
            person = {
            aviPath: this.attending[i]["photo"],
            name: this.attending[i]["name"],
            state: this.attending[i]["state"],
            city: this.attending[i]["city"],
            zip: this.attending[i]["zip"],
            interests: this.attending[i]["interests".toString()],
            bio: this.attending[i]["bio"],
            email: this.attending[i]["email"],
            photo: this.attending[i]["photo"]
      }
             console.log(this.attending[i]["interests".toString()]);
          }
          //console.log("This person is " + );
      }
    //     if (this.profiles[i] === people.name){
            
    //         console.log(this.profiles[i]["name"]);
    //         this.person = this.profiles[i];
    //     }
    //   }
       this.navCtrl.push(AccountPage, person);
  }

}

export class Campaign {
    private title:string;
    private date:string;
    private location:string;
    private description:string;

    constructor(_title, _date, _location, _description) {
        this.title = _title;
        this.date = _date;
        this.location = _location;
        this.description = _description;
    }

    getTitle = function() {
        return this.title;
    }

    getDate = function() {
        return this.date;
    }

    getDescription = function() {
        return this.description;
    }

    getLocation = function() {
        return this.location;
    }
}