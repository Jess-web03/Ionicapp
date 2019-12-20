import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exemple1Page } from './exemple1.page';

const routes: Routes = [
  {
    path: '',
    component: Exemple1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exemple1PageRoutingModule {}
