import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'campaign-page',
  templateUrl: 'campaign.html'
})
export class CampaignPage {
  selectedItem: any;

constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
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