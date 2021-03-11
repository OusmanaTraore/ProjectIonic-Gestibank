import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAgentPageRoutingModule } from './list-agent-routing.module';

import { ListAgentPage } from './list-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAgentPageRoutingModule
  ],
  declarations: [ListAgentPage]
})
export class ListAgentPageModule {}
