import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CampaignsPage } from '../campaigns/campaigns';


/**
 * Generated class for the OrganizePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'organize-page',
  templateUrl: 'organize.html',
  providers: [CampaignsPage]
})
export class OrganizePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public campaignsPage: CampaignsPage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizePage');
  }
  
  addCampaign = function(_title, _date, _location, _description) {
    this.campaignsPage.items.push({
      title: _title,
      date: _date,
      note: _description,
      location: _location,
      icon: 'megaphone'
    })
    console.log(this.campaignsPage.items)

  }

}


