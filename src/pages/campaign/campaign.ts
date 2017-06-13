import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'campaign-page',
  templateUrl: 'campaign.html',
  providers: [ HttpProvider ]
})
export class CampaignPage {
  selectedItem: any;
  profiles: Array<{profile:any}>;
  attending: Array<{aviPath: string, name: string}>;
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