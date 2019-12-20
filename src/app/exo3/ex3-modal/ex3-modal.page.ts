import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PokemonDetailsRequest } from 'src/app/_models/pokemon-details-request';
import { PokemonService } from 'src/app/_services/pokemon.service';
import { RadialChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-ex3-modal',
  templateUrl: './ex3-modal.page.html',
  styleUrls: ['./ex3-modal.page.scss'],
})
export class Ex3ModalPage implements OnInit {

  @Input() url: string

  model: PokemonDetailsRequest

  radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  radarChartLabels: Label[] = [];

  radarChartData: ChartDataSets[] = [
    { data: [], label: '' },
   
  ];
  radarChartType: ChartType = 'radar';


  constructor(
    private modalCtrl: ModalController,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    //pour verifier si je recupere le url de mon pokemon pour ensuite faire une requete
    //je recupere une url différente quand je clic
   // console.log(this.url);
   this.pokemonService
        .getDetails(this.url)
        //j'utilise des accolades pour mettre plusieurs propriétés
        .then(data => {
          this.model = data;
          // s c'est mes datas, je peux réutiliser plusieurs fois s dans mon scope
          this.radarChartLabels = data.stats.map(s => s.stat.name);
          this.radarChartData[0].data = data.stats.map(s => s.base_stat);
        });
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }
}
