import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exemple7PageRoutingModule } from './exemple7-routing.module';

import { Exemple7Page } from './exemple7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exemple7PageRoutingModule
  ],
  declarations: [Exemple7Page]
})
export class Exemple7PageModule {}
