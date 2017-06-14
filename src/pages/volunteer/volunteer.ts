import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CampaignsPage } from '../campaigns/campaigns';

/**
 * Generated class for the VolunteerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-volunteer',
  templateUrl: 'volunteer.html',
})
export class VolunteerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VolunteerPage');
  }

  goToCampaignsPage(){
    this.navCtrl.push(CampaignsPage);
  }

  }


