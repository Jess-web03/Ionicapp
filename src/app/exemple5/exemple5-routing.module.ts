import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exemple5Page } from './exemple5.page';

const routes: Routes = [
  {
    path: '',
    component: Exemple5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exemple5PageRoutingModule {}
