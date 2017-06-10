import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DonatePage } from '../donate/donate';
import { VolunteerPage } from '../volunteer/volunteer';
import { OrganizePage } from '../organize/organize';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToDonate() {
    this.navCtrl.push(DonatePage);
  }

  goToVolunteer() {
    this.navCtrl.push(VolunteerPage);
  }

  goToOrganize() {
    this.navCtrl.push(OrganizePage);
  }

}
