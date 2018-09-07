import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/interval';
import { ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';



/**
 * Generated class for the Task1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
  declare var firebase;


@IonicPage()
@Component({
  selector: 'page-task1',
  templateUrl: 'task1.html',
})
export class Task1Page {
 
  setRootPage = ""
timerVar;
timerVal;
task:''
public form 	: FormGroup;

counter = 0;
b
questions = [{
  question : '',
  qtype :''
}]
qType = 'FIN'

person : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController,private _FB          : FormBuilder) {
  this.startTimer();
    this.task = navParams.get("taskName");
      this.counter = navParams.get("counter");
      console.log(this.counter)
    firebase.database().ref('/'+this.task+'/').on("value", (snapshot)=>{
      snapshot.forEach(e => {
        this.questions.push({question: e.val().question, qtype: e.val().questionType})
        
      });
    })


    this.form = this._FB.group({
      additional     : this._FB.array([
         this.initTechnologyFields()
      ])
   });

   for( this.b = 0; this.b < this.counter ; ++this.b){
     this.addNewInputField();
     console.log("OOOOOOO")
   }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Task1Page');
    
  
  }
startTimer(){
 this.timerVar = Observable.interval(1000).subscribe( x => {
  //  console.log(x)
  this.timerVal = x;

   if(x == 30){
     this.timerVar.unsubscribe();
    this.navCtrl.push("Task2Page");
    
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

initTechnologyFields() : FormGroup
{
   return this._FB.group({
      answer       	  : ['', Validators.required]
   });
}

addNewInputField() : void
{
   const control = <FormArray>this.form.controls.additional;
   control.push(this.initTechnologyFields());
}


manage(val : any) : void
   {
      console.dir(val);
      console.log(this.counter)

      
   }

}
