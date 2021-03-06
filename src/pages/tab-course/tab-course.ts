import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular/index';

@IonicPage()
@Component({
  selector: 'page-tab-course',
  templateUrl: 'tab-course.html',
})
export class TabCoursePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabCoursePage');
  }

  /* ปิดการแสดงเมนูด้านข้าง */
  ionViewDidEnter(){
   this.menu.swipeEnable(false, 'menu_right');
  }

  ionViewDidLeave(){
    this.menu.swipeEnable(true, 'menu_right');
  }

}
