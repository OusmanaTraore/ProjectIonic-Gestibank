import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevisePage } from './devise.page';

const routes: Routes = [
  {
    path: '',
    component: DevisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevisePageRoutingModule {}
