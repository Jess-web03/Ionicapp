import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex3ModalPageRoutingModule } from './ex3-modal-routing.module';

import { Ex3ModalPage } from './ex3-modal.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex3ModalPageRoutingModule
    
  ],
  declarations: [Ex3ModalPage]
})
export class Ex3ModalPageModule {}
