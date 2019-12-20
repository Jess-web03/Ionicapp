import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exo3Page } from './exo3.page';

const routes: Routes = [
  {
    path: '',
    component: Exo3Page
  },
  {
    path: 'ex3-modal',
    loadChildren: () => import('./ex3-modal/ex3-modal.module').then( m => m.Ex3ModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exo3PageRoutingModule {}
