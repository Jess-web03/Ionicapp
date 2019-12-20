import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exemple3PageRoutingModule } from './exemple3-routing.module';

import { Exemple3Page } from './exemple3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exemple3PageRoutingModule
  ],
  declarations: [Exemple3Page]
})
export class Exemple3PageModule {}
