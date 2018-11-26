import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
import { Observable } from 'rxjs';

More(Highcharts);

@IonicPage()
@Component({
  selector: 'page-car-insight',
  templateUrl: 'car-insight.html',
})


export class CarInsightPage {
  speed: Observable<any[]>;
  @ViewChild("container1", { read: ElementRef }) container1: ElementRef;
  @ViewChild("container2", { read: ElementRef }) container2: ElementRef;
  @ViewChild("container3", { read: ElementRef }) container3: ElementRef;
//   @ViewChild("container4", { read: ElementRef }) container4: ElementRef;
//   @ViewChild("container5", { read: ElementRef }) container5: ElementRef;
//   @ViewChild("container6", { read: ElementRef }) container6: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fDB: AngularFireDatabase){
       this.speed = this.fDB.list("/users/0e76c3ae780e84a5b3b9380c937610b013e292e1e3903a124d58348674daefcf929839388991c5685e4f0b6fb71fa8ad5708c8e46ea1afca59f2d223baf46a5b/realtime/speed").valueChanges();
   }

  

   ionViewDidLoad() {
     Highcharts.chart(this.container1.nativeElement, {
        chart: {
               type: 'gauge',
               plotBackgroundColor: null,
               plotBackgroundImage: null,
               plotBorderWidth: 0,
               plotShadow: false
           },
       
           title: {
               text: 'Speedometer'
           },
       
            credits: {
                enabled: false
           },
           pane: {
               startAngle: -150,
               endAngle: 150,
               background: [{
                   backgroundColor: {
                       linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                       stops: [
                           [0, '#FFF'],
                           [1, '#333']
                       ]
                   },
                   borderWidth: 0,
                   outerRadius: '109%'
               }, {
                   backgroundColor: {
                       linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                       stops: [
                           [0, '#333'],
                           [1, '#FFF']
                       ]
                   },
                   borderWidth: 1,
                   outerRadius: '107%'
               }, {
                   // default background
               }, {
                   backgroundColor: '#DDD',
                   borderWidth: 0,
                   outerRadius: '105%',
                   innerRadius: '103%'
               }]
           },
       
           // the value axis
           yAxis: {
               min: 0,
               max: 500,
       
               minorTickInterval: 'auto',
               minorTickWidth: 1,
               minorTickLength: 10,
               minorTickPosition: 'inside',
               minorTickColor: '#666',
       
               tickPixelInterval: 30,
               tickWidth: 2,
               tickPosition: 'inside',
               tickLength: 10,
               tickColor: '#666',
               labels: {
                   step: 2,
                   rotation: 'auto'
               },
               title: {
                   text: 'km/h'
               },
               plotBands: [{
                   from: 0,
                   to: 120,
                   color: '#55BF3B' // green
               }, {
                   from: 120,
                   to: 200,
                   color: '#DDDF0D' // yellow
               }, {
                   from: 200,
                   to: 500,
                   color: '#DF5353' // red
               }]
           },
       
           series: [{
               name: 'Speed',
               data: [this.speed],
               tooltip: {
                   valueSuffix: ' km/h'
               }
           }]
           },
       // Add some life
       function (chart) {
           if (!chart.renderer.forExport) {
                
           }
       });
  }

  

  ionViewWillEnter() {

  }

}

