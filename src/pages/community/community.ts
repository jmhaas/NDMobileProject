import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the CommunityResourcesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-community',
  templateUrl: 'community.html',
})
export class CommunityPage {

  @ViewChild("map") mapElement :ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation:Geolocation) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {

    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    let mapOptions = {
      center: latLng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,
      draggable: false,
      mapTypeControl: false,
      scrollwheel: false,
    };

    let brandywine = {latitude: 39.756,longitude: -75.549};

    let marker = new google.maps.Marker({
      map: this.map,
      position: brandywine,
    });


    marker.setMap(this.map);

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, (error) => {
      alert("Error!");
    });
  }

}

