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

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  getCampaignJsonData(){
    return this.http.get('../../../assets/campaigns.json')
    .map((res:Response) => res.json().campaigns);
  }

//   load() {
//     console.log('json called');
//     return new Promise(resolve => {
//         this.http.get('assets/data/patient.json').map(response => {
//             this.data = response.json();
//             resolve(this.data);
//         });
//     });
// }
}
