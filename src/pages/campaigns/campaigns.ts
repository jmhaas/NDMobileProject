import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Campaign, CampaignPage } from '../campaign/campaign';
import { HttpProvider } from '../../providers/http/http';

@IonicPage()
@Component({
  selector: 'page-campaigns',
  templateUrl: 'campaigns.html',
  providers: [ HttpProvider ]
})
export class CampaignsPage {
  selectedItem: any;
  items: Array<{title: string, date:string, note: string, location:string, icon: string, members: string[]}>;
  campaigns: Array<{campaign: Campaign}>;
  profiles: Array<{name: string, photo: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider) {
    this.selectedItem = navParams.get('item');
    this.campaigns = [];
    this.profiles = [];
    this.items = [];


    this.httpProvider.getProfilesJsonData().subscribe((data) => {
      console.log("What is in the data: ", data);
      this.profiles = data;
      for (let i = 0; i < this.profiles.length; i += 1) {
        console.log(this.profiles[i]["name"])
    }
    },
    err => {
      console.log("Error, "+err);
    },
    () => {
      console.log("Completed");
    })


    this.httpProvider.getCampaignJsonData().subscribe((data) => {
      console.log("What is in the data: ", data);
      this.campaigns = data; 
      for (let i = 0; i < this.campaigns.length; i += 1) {
        this.items.push({
        title: this.campaigns[i]["title"],
        date: this.campaigns[i]["date"],
        note: this.campaigns[i]["description"],
        location: this.campaigns[i]["location"],
        members: [this.profiles[0]["name"], this.profiles[1]["name"], this.profiles[2]["name"]],
        icon: 'megaphone'
      })
      console.log(this.profiles[0]["name"]);
    }
    },
    err => {
      console.log("Error, "+err);
    },
    () => {
      console.log("Completed");
    })
  }

  itemTapped(event, item) {
    this.navCtrl.push(CampaignPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CampaignsPage');
  }

}

