import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Campaign, CampaignPage } from '../campaign/campaign';


/**
 * Generated class for the CampaignsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-campaigns',
  templateUrl: 'campaigns.html',
})
export class CampaignsPage {
  selectedItem: any;
  items: Array<{title: string, date:string, note: string, location:string, icon: string}>;
  campaigns: Array<{campaign: Campaign}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    this.campaigns = [];
    this.campaigns[0] = ({campaign:new Campaign("Clean Up The Park", "7/10/2016", "Brandywine Park", "Lets clean up")});
    this.items = [];

    this.items.push({
    title: this.campaigns[0].campaign.getTitle(),
    date: this.campaigns[0].campaign.getDate(),
    note: this.campaigns[0].campaign.getDescription(),
    location: this.campaigns[0].campaign.getLocation(),
    icon: 'megaphone'
    })
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CampaignPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CampaignsPage');
  }

}

