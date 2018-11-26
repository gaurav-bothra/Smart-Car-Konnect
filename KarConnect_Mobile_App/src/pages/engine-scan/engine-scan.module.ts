import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EngineScanPage } from './engine-scan';

@NgModule({
  declarations: [
    EngineScanPage,
  ],
  imports: [
    IonicPageModule.forChild(EngineScanPage),
  ],
})
export class EngineScanPageModule {}
