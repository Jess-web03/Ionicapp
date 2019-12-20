import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exemple3Page } from './exemple3.page';

const routes: Routes = [
  {
    path: '',
    component: Exemple3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exemple3PageRoutingModule {}
