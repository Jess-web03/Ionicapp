import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exo1Page } from './exo1.page';

const routes: Routes = [
  {
    path: '',
    component: Exo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exo1PageRoutingModule {}
