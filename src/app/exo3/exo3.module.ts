import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exo3PageRoutingModule } from './exo3-routing.module';

import { Exo3Page } from './exo3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exo3PageRoutingModule
  ],
  declarations: [Exo3Page]
})
export class Exo3PageModule {}
