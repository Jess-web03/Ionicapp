import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exemple6PageRoutingModule } from './exemple6-routing.module';

import { Exemple6Page } from './exemple6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exemple6PageRoutingModule
  ],
  declarations: [Exemple6Page]
})
export class Exemple6PageModule {}
