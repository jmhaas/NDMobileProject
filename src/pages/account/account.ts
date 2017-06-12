import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CampaignPage, Campaign } from '../campaign/campaign';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  providers: [ HttpProvider ]
})
export class AccountPage {
  selectedItem: any;
  items: Array<{title: string, date: string, note: string, location: string, icon: string}>;
  campaigns: Array<{campaign: Campaign}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider) {
    this.selectedItem = navParams.get('item');

    this.campaigns = [];
    this.items = [];
    this.httpProvider.getCampaignJsonData().subscribe((data) => {
      console.log("What is in the data: ", data);
      this.campaigns = data;
      for (let i = 0; i < 3; i += 1) {
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

// export class Account{

//   lastName: string;
//   email: string;
//   zipCode: string;
//   city: string;
//   state: string;
//   interests: Array<{interest: string}>;
//   bio: string;
//   campaignsJoined: Array<{campaign: Campaign}>;

//   constructor(_firstName, _lastName, _email, _zipCode){
//     this.lastName = _lastName;
//     this.email = _email;
//     this.zipCode = _zipCode;
//     this.city = "Waldorf";
//     this.state = "MD";
//     this.interests = [];
//     this.bio = "I like helping people to understand things";
//     this.campaignsJoined = [];
//   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
  itemTapped(event, item) {
    this.navCtrl.push(CampaignPage, {
      item: item
    });
  }
}
