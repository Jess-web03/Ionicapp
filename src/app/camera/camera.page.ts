import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FoodDataService } from '../_services/food-data.service';
import { FoodData } from '../_models/food';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  barcode: string;
  model: FoodData;


  constructor(
    private scanner: BarcodeScanner,
    private foodDataService: FoodDataService
        ) { }

  ngOnInit() {
  }
//  scan(){
//   //this.scanner.scan().then(codbar => console.log(codbar));
//     this.scanner.scan().then(codebar => {
//     this.barcode = codebar.text;
//     this.foodDataService.getFoodDataByBarcode(this.barcode)
//     .then(data => this.model = data);

//     }).catch(()=> {
//       this.foodDataService.getFoodDataByBarcode(this.barcode)
//     })
//     .then(data => this.model = data);
//   //il affiche le codebarre du produit 
//   });
//   }
// }


scan() {
  this.scanner
    .scan()
    .then(codeBarre => {
      this.barcode = codeBarre.text;
      this.foodDataService.getFoodDataByBarcode(this.barcode)
        .then(data => this.model = data);
    })
    .catch(() => {
      this.foodDataService.getFoodDataByBarcode('5410056185784')
        .then(data => this.model = data);
    });
  }
}
