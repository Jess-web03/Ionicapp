import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exo2Page } from './exo2.page';

const routes: Routes = [
  {
    path: '',
    component: Exo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exo2PageRoutingModule {}
