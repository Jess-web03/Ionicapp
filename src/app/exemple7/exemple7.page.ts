import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../_services/weather.service';
import { WeatherData } from '../_models/weather';

@Component({
  selector: 'app-exemple7',
  templateUrl: './exemple7.page.html',
  styleUrls: ['./exemple7.page.scss'],
})
export class Exemple7Page implements OnInit {

  constructor(
    private weatherService: WeatherService
  ) { }

  cityName: string;

  weather: WeatherData;

  //weather:any;
  ngOnInit() {
  }
  search(){
    this.weatherService.getWeather(this.cityName)
    //ensuite je recupere ce que je veux: l'humidité, la temperature par ex
    //.then(data => console.log(data.main.humidity));
    .then (data => this.weather = data);
  }
}
