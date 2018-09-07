import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/interval';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the Task2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-task2',
  templateUrl: 'task2.html',
})
export class Task2Page {

  timerVar;
timerVal;

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {
    this.startTimer(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Task2Page');
  }
  startTimer(){
    this.timerVar = Observable.interval(1000).subscribe( x => {
     //  console.log(x)
      this.timerVal = x;
   
      if(x == 30){
        this.timerVar.unsubscribe();
        // this.presentToast();
   
      }
    })
     
   }
   presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Time Out!',
      duration: 5000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  
  }
}
