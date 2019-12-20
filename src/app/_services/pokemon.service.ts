import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonData } from '../_models/pokemon';
import { PokemonDetailsRequest } from '../_models/pokemon-details-request';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  


  constructor(
    private httpClient: HttpClient
  ) { 

  }
  getPokemon(url: string){
    return this.httpClient
      .get<PokemonData>(url)
      .toPromise();
  }
  //avoir details du pokemon
  getDetails(url: string){
    return this.httpClient
      .get<PokemonDetailsRequest>(url)
      .toPromise();
  }
}
