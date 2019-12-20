import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exo2PageRoutingModule } from './exo2-routing.module';

import { Exo2Page } from './exo2.page';
import { IonicStorageModule} from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exo2PageRoutingModule,
    IonicStorageModule.forRoot(),
  ],
  declarations: [Exo2Page]
})
export class Exo2PageModule {}
