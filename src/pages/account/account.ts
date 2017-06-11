import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}

export class Account{

  lastName: string;
  email: string;
  zipCode: string;
  city: string;
  state: string;
  interests: Array<{interest: string}>;
  bio: string;
  campaignsJoined: Array<{campaign: Campaign}>;

  constructor(_firstName, _lastName, _email, _zipCode){
    this.lastName = _lastName;
    this.email = _email;
    this.zipCode = _zipCode;
    this.city = "Waldorf";
    this.state = "MD";
    this.interests = [];
    this.bio = "I like helping people to understand things";
    this.campaignsJoined = [];
  }
}
