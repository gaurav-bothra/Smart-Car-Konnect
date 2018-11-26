var OBDReader = require('bluetooth-obd');
let firebase = require('firebase');
let cred = require('./credentials.json')
var btOBDReader = new OBDReader();
var dataReceivedMarker = {};

  var config = {
    apiKey: "AIzaSyDkq9vEqI9vtCahiYKH4s-u4XOGyRQL7Ew",
    authDomain: "karconnect-iot.firebaseapp.com",
    databaseURL: "https://karconnect-iot.firebaseio.com",
    projectId: "karconnect-iot",
    storageBucket: "karconnect-iot.appspot.com",
    messagingSenderId: "216638538820"
  };
  firebase.initializeApp(config);

 
 btOBDReader.on('connected', function () {
    this.requestValueByName("vss"); //vss = vehicle speed sensor
 
     this.addPoller("vss");
    this.addPoller("rpm");
     this.addPoller("temp");
     this.addPoller("load_pct");
      this.addPoller("map");
   
//      this.addPoller("rpm");
// //    this.addPoller("temp"); 
// //	this.addPoller("vss");
// // this.addPoller("load_pct");
     this.addPoller("runtm");
// // this.addPoller("mil_dist");
     this.addPoller("aat");
     this.addPoller("fli");
     this.addPoller("request_dtc")

    
     this.startPolling(1000); //Request all values each second.
 });





btOBDReader.on('dataReceived', function (data) {
    //firebase.database().ref().child("users").child(cred.token).set({
  //  realtime:data
//});

    if(data.name == "rpm") {
	firebase.database().ref("users").child(cred.token).child("realtime").child("RPM").set(data.value);
	firebase.database().ref("users").child(cred.token).child("previous_val").child("RPM").push(data.value);
} else if(data.name == "vss") {
	firebase.database().ref("users").child(cred.token).child("realtime").child("speed").set(data.value);
		firebase.database().ref("users").child(cred.token).child("previous_val").child("speed").push(data.value);
} else if(data.name == "temp") {
		firebase.database().ref("users").child(cred.token).child("realtime").child("temp").set(data.value);
	firebase.database().ref("users").child(cred.token).child("previous_val").child("temp").push(data.value);
} else if(data.name == "load_pct") {
	firebase.database().ref("users").child(cred.token).child("realtime").child("Engine_load").set(data.value);
	firebase.database().ref("users").child(cred.token).child("previous_val").child("Engine_load").push(data.value);
} else if(data.name == "iat") {
	firebase.database().ref("users").child(cred.token).child("realtime").child("air_pressure").set(data.value);
	firebase.database().ref("users").child(cred.token).child("previous_val").child("air_pressure").push(data.value);
} else if(data.name == "request_dtc") {
	firebase.database().ref("users").child(cred.token).child("error").push(data.value);	
}	firebase.database().ref("users").child(cred.token).child("previous_val").child("error").push(data.value);
});
 
// Use first device with 'obd' in the name
 btOBDReader.autoconnect('OBDII');
