import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exemple4PageRoutingModule } from './exemple4-routing.module';

import { Exemple4Page } from './exemple4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exemple4PageRoutingModule
  ],
  declarations: [Exemple4Page]
})
export class Exemple4PageModule {}
