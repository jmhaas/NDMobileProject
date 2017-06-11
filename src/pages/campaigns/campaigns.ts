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
  items: Array<{title: string, date:string, note: string, location:string, icon: string}>;
  campaigns: Array<{campaign: Campaign}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider) {
    this.selectedItem = navParams.get('item');

    this.campaigns = [];
    this.items = [];
    this.httpProvider.getCampaignJsonData().subscribe((data) => {
      console.log("What is in the data: ", data);
      this.campaigns = data;
      for (let i = 0; i < this.campaigns.length; i += 1) {
        this.items.push({
        title: this.campaigns[i]["title"],
        date: this.campaigns[i]["date"],
        note: this.campaigns[i]["description"],
        location: this.campaigns[i]["location"],
        icon: 'megaphone'
      })
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

