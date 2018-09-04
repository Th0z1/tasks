import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

check:boolean;
check1:boolean;
check2:boolean;
done:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.check = true;
    this.check1 = true;
    this.check2 = true;
    this.done = false;


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  task1(){
    
    this.navCtrl.push("Task1Page");
    this.check = false;
  }
  task2(){
   this.check = false;
    this.navCtrl.push("Task2Page");
    this.check1 = false;
  }
  task3(){
    this.check = false;
    this.check1 = false;
    this.navCtrl.push("Task3Page");
    this.check2 = false;
    this.done = true;
  }
}
