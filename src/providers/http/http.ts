import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpProvider {
  data: any;

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  getCampaignJsonData(){
    return this.http.get('../../../assets/campaigns.json')
    .map((res:Response) => res.json().campaigns);
  }

  postCampaignJsonData(){
    var data = JSON.stringify({title: this.data.title,
    data: this.data.date,
    location: this.data.location,
    description: this.data.description});
    return this.http.post('../../../assets/campaigns.json', data)
    .map((res:Response) => res.json().campaigns);
  }

  getProfilesJsonData(){
    return this.http.get('../../../assets/profiles.json')
    .map((res:Response) => res.json().profiles);
  }
}
