import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevisePageRoutingModule } from './devise-routing.module';

import { DevisePage } from './devise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevisePageRoutingModule
  ],
  declarations: [DevisePage]
})
export class DevisePageModule {}
