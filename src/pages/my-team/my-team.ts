import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-team',
  templateUrl: 'my-team.html',
})
export class MyTeamPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  IsActivetab(){

    return false;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamPage');
  }

}
