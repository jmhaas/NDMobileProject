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

    let currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    let mapOptions = {
      center: currentLocation,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,
      draggable: true,
      mapTypeControl: false,
      scrollwheel: false,
    };

    let brandywine = new google.maps.LatLng(39.756, -75.549);

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
 
     let marker = new google.maps.Marker({
       map: this.map,
       position: brandywine,
     });

    marker.setMap(this.map);

    var infowindow = new google.maps.InfoWindow({
      content: "<h4>Clean Up The Park</h4><br><p> Date: 7.15.2017 Location: Brandywine Park",
    });

    marker.addListener('click', function() {
      infowindow.open(this.map, marker);
    });

    }, (error) => {
      alert("Error!");
    });
  }

}

