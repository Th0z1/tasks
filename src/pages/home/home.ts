import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

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

tasksName = [{
  name:''
}]

counter = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.check = true;
    this.check1 = true;
    this.check2 = true;
    this.done = false;
    firebase.database().ref('/tasks/').on("value", (snapshot)=>{
      snapshot.forEach(e => {
        
          this.tasksName.push({name: e.val().taskName})
      });
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  task(myTask){
    console.log(myTask)
    
    this.check = false;

    firebase.database().ref('/'+myTask+'/').on("value", (snapshot)=>{
      snapshot.forEach(e => {
        
        this.counter +=1;
      });
      console.log("done counting..."+this.counter)
    })

    this.navCtrl.push("Task1Page", {taskName: myTask, counter: this.counter});
    this.counter = 0;
  }
  
}
