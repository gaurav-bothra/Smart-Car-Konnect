import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarInsightPage } from './car-insight';

@NgModule({
  declarations: [
    CarInsightPage,
  ],
  imports: [
    IonicPageModule.forChild(CarInsightPage),
  ],
})
export class CarInsightPageModule {}
