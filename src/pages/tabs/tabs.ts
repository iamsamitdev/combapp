import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root:any = 'TabHomePage';
  tab2Root:any = 'TabCoursePage';
  tab3Root:any = 'TabServicePage';
  tab4Root:any = 'TabArticlePage';
  tab5Root:any = 'TabContactPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
