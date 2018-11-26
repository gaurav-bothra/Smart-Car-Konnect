import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Socket } from 'ng-socket-io';
import { OneSignal } from '@ionic-native/onesignal';

import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  private secureStorage:SecureStorage;
  
  
  rootPage:string = 'LoginPage';
  constructor(private oneSignal: OneSignal, platform: Platform, statusBar: StatusBar,private splashScreen: SplashScreen, private socket: Socket) {
    platform.ready().then(() => {
      // this.secureStorage = new SecureStorage();
      // this.secureStorage.create('KarConnect').then(
      //   (storage: SecureStorageObject) => {
      //     storage.get('token').then(data => {
      //       this.rootPage = 'TabsPage';
      //     }).catch(e => {
      //       this.rootPage = 'LoginPage';
      //     })
      //   });
      // this.socket.connect();
      // this.socket.emit('set-nickname', "helolo");
      // statusBar.styleBlackTranslucent();
      // setInterval(this.hidesplash,3000);
      
      // this.secureStorage.create('karconnect')
      // .then((storage: SecureStorageObject) => {
      // storage.get('X-Token')
      //  .then(
      //    data => this.rootPage = 'TabsPage',
      //    error => this.rootPage = 'LoginPage'
      //  );
      // });
      

      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };
      window["plugins"].OneSignal
      .startInit("9e2cccc2-11a4-43a4-afc3-2d0a9ee4e077", "216638538820")
      .handleNotificationOpened(notificationOpenedCallback)
      .endInit();

      this.oneSignal.getIds().then((id) => {
      });

    });
    
    
  }

  hidesplash() {
    // this.splashScreen.hide();
  }
}
