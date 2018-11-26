import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { User } from '../../models/User.interface';
// import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { storage } from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private user = { } as User

  constructor(public loadingCtrl: LoadingController, private secureStorage: SecureStorage,public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider) {
    this.user.email ="gauravbothra98@gmail.com";
    this.user.password="123123";
  }

  navigateto() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    if(this.user.email != "gauravbothra98@gmail.com" || this.user.password != "123123") {
      loading.dismiss();
      alert("Invalid Username and Password");
    } else {
      this.authService.login(this.user).subscribe(user => {
        alert(user.token)
           
            loading.dismiss();
            this.navCtrl.setRoot('TabsPage');
         
        }); 
    }
    
  }

}
