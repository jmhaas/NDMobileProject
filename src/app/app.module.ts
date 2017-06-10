import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {VolunteerPage} from '../pages/volunteer/volunteer';
import {DonatePage} from '../pages/donate/donate';
import {CampaignsPage} from '../pages/campaigns/campaigns';
import { CommunityPage } from '../pages/community/community';
import { OrganizePage } from '../pages/organize/organize';
import { CampaignPage } from '../pages/campaign/campaign';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VolunteerPage,
    CampaignsPage,
    DonatePage,
    OrganizePage,
    CommunityPage,
    CampaignPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VolunteerPage,
    CampaignsPage,
    DonatePage,
    OrganizePage,
    CommunityPage,
    CampaignPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
