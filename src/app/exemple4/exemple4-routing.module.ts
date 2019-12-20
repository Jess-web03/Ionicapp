import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exemple4Page } from './exemple4.page';

const routes: Routes = [
  {
    path: '',
    component: Exemple4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exemple4PageRoutingModule {}
