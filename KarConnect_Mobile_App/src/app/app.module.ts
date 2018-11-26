import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { FormsModule } from '@angular/forms';
import { Device } from '@ionic-native/device';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { SecureStorage } from '@ionic-native/secure-storage';
import { OneSignal } from '@ionic-native/onesignal';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';
import { HttpClientModule  } from '@angular/common/http';
// import { AuthServiceProvider } from '../providers/auth-service/auth-service';
// import { Http } from '@angular/http';
const config: SocketIoConfig = { url: 'http://192.168.1.101', options: {} };
var Fconfig = {
  apiKey: "AIzaSyDkq9vEqI9vtCahiYKH4s-u4XOGyRQL7Ew",
  authDomain: "karconnect-iot.firebaseapp.com",
  databaseURL: "https://karconnect-iot.firebaseio.com",
  projectId: "karconnect-iot",
  storageBucket: "karconnect-iot.appspot.com",
  messagingSenderId: "216638538820"
};


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    AngularFireModule.initializeApp(Fconfig),
    HttpModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Device,
    SecureStorage,
    HttpClientModule ,
    OneSignal,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
