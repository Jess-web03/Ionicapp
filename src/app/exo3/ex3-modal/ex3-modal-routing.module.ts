import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex3ModalPage } from './ex3-modal.page';

const routes: Routes = [
  {
    path: '',
    component: Ex3ModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex3ModalPageRoutingModule {}
