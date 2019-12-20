import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exemple1PageRoutingModule } from './exemple1-routing.module';

import { Exemple1Page } from './exemple1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exemple1PageRoutingModule
  ],
  declarations: [Exemple1Page]
})
export class Exemple1PageModule {}
