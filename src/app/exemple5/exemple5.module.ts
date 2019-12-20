import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exemple5PageRoutingModule } from './exemple5-routing.module';

import { Exemple5Page } from './exemple5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exemple5PageRoutingModule
  ],
  declarations: [Exemple5Page]
})
export class Exemple5PageModule {}
