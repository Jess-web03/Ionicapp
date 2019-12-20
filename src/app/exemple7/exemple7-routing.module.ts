import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exemple7Page } from './exemple7.page';

const routes: Routes = [
  {
    path: '',
    component: Exemple7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exemple7PageRoutingModule {}
