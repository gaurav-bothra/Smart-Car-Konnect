import { Geolocation } from '@ionic-native/geolocation';
import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { GoogleMap, GoogleMapsEvent, Environment} from '@ionic-native/google-maps';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  map: GoogleMap;  
  me: any;
  constructor(private geolocation: Geolocation, private fDB: AngularFireDatabase) { 
    let watch = geolocation.watchPosition();
    watch.subscribe(data => {
      this.fDB.database.ref("users").child("0e76c3ae780e84a5b3b9380c937610b013e292e1e3903a124d58348674daefcf929839388991c5685e4f0b6fb71fa8ad5708c8e46ea1afca59f2d223baf46a5b").child("your_location").set({
        lat : data.coords.latitude,
        lgn : data.coords.longitude,
        timestamp : data.timestamp
      });
      this.me = {
        
        _x: data.coords.latitude,
        _y: data.coords.longitude
    }
      this.loadMap();
    });
    
  }

  loadMap(){
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBxl8SBqtvOzwPqEtHYQqGmS8ZQkgWaxCs',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBxl8SBqtvOzwPqEtHYQqGmS8ZQkgWaxCs'
    });
    this.map = new GoogleMap('map', {
      'backgroundColor': 'white',
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'camera': {
        'target': {
          lat: this.me._x,
          lng: this.me._y
        },
        'tilt': 30,
        'zoom': 15,
        'bearing': 50
      }
    });

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
        console.log('Map is ready!');
    });

}
  
  ionViewdidLoad() {
  
  }


  ionViewWillEnter() {  
    
  }
  
   
}

