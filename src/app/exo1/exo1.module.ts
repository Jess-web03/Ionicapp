import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exo1PageRoutingModule } from './exo1-routing.module';

import { Exo1Page } from './exo1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exo1PageRoutingModule
  ],
  declarations: [Exo1Page]
})
export class Exo1PageModule {}
