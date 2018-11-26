import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {
  alertList = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.afDB.database.ref('users').child('0e76c3ae780e84a5b3b9380c937610b013e292e1e3903a124d58348674daefcf929839388991c5685e4f0b6fb71fa8ad5708c8e46ea1afca59f2d223baf46a5b').child('alerts').on('value', snapshot => {
      snapshot.forEach(snap => {
        this.alertList.push({
          alert : snap.child("alert").val(),
          location :snap.child("location").val(),
          timestamp : snap.child("timestamp").val()
        });
      })
    });
  }

}
