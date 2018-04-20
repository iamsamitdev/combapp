import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular/index';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userData = { "username": "", "password": "" };

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    alert(JSON.stringify(this.userData));
  }

  /* ปิดการแสดงเมนูด้านข้าง */
  ionViewDidEnter() {
    this.menu.swipeEnable(false, 'menu_left');
    this.menu.swipeEnable(false, 'menu_right');
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true, 'menu_left');
    this.menu.swipeEnable(true, 'menu_right');
  }

}
