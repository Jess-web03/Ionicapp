import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../_models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = 'd52e50e34214ff0b92247f788638eeb9';

  //c'est une url d'une api, sur lequel on recupere les indos
  endPoint : string = 'https://api.openweathermap.org/data/2.5/weather?q=';

  constructor(
    private httpClient: HttpClient
  ) { 

  }
//cette methode retourne la meteo à la fin
  getWeather(cityName: string){
    return this.httpClient
      .get<WeatherData>(this.endPoint + cityName + '&APPID=' + this.apiKey)
      .toPromise();
  }
}
