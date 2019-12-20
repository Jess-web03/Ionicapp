import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../_services/pokemon.service';
import { PokemonData } from '../_models/pokemon';
import { ModalController } from '@ionic/angular';
import { Ex3ModalPage } from './ex3-modal/ex3-modal.page';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.page.html',
  styleUrls: ['./exo3.page.scss'],
})
export class Exo3Page implements OnInit {

  model: PokemonData
  constructor(
    private PokemonService: PokemonService,
    private modalCtrl: ModalController
  ) { }

  name: string
  pokemon: PokemonData

  //je veux afficher directement à l'initialisation de mon applicationh
  //je vais dans ngOnInit()
  ngOnInit() {
    this.PokemonService
    .getPokemon('https://pokeapi.co/api/v2/pokemon')
    .then(data => this.pokemon = data)
  }

  //cette méthode va changer mon contexte
  previous(){
    this.PokemonService
    .getPokemon(this.pokemon.previous)
    .then(data => this.pokemon = data)
  }
  next(){
    this.PokemonService
    .getPokemon(this.pokemon.next)
    .then(data => this.pokemon = data)
  }
  //je passe url en argument pour recuperer pokemon particulier
  openModal(url){
    this.modalCtrl.create({
      component: Ex3ModalPage,
      componentProps:{
        url: url
      }
    }).then(modal => modal.present())
  }
}
