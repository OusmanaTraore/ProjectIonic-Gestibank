import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAgentPage } from './list-agent.page';

const routes: Routes = [
  {
    path: '',
    component: ListAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAgentPageRoutingModule {}
