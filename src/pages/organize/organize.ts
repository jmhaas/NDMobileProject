import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CampaignsPage } from '../campaigns/campaigns';
import { HttpProvider } from '../../providers/http/http';


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
  providers: [ HttpProvider ]
})
export class OrganizePage {
  private httpProvider: HttpProvider

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizePage');
  }
  
  addCampaign = function(_title, _date, _location, _description, ) {
    // this.campaignsPage.items.push({
    //   title: _title,
    //   date: _date,
    //   note: _description,
    //   location: _location,
    //   icon: 'megaphone'
    // })
    // console.log(this.campaignsPage.items)

    this.navCtrl.push(CampaignsPage, {
      title: _title,
      date: _date,
      note: _description,
      location: _location,
      icon: 'megaphone'
    })
    // this.httpProvider.postCampaignJsonData().subscribe(data =>
    // {this.data.response = data._body;
    // }, error => {
    //   console.log("ERRRORRRR!");
    // })

  }

}
