import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import{observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { ICurrentWeather } from '../interfaces/icurrent-weather';

interface ICurrentWeatherData {

  weather: [{

    description: string,

    icon: string

  }],

  main: {

    temp: number

  },

  sys: {

    country: string

  },

  dt: number,

  name: string

} 

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }
  getCurrentWeather(city: string, country: string) {
    return this.httpClient.get<ICurrentWeatherData>(
      `http://api.openweathermap.org/data/2.5/weather?`+
      `q=${city},${country}&appid=${environment.appId}`

    ).pipe(
      map(data=>this.transformToICurrentWeather(data)
    )
    )
}
private transformToICurrentWeather(data: ICurrentWeatherData):
 ICurrentWeather {
   return {
     city: data.name,
     country: data.sys.country,
     date: new Date(),
     image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
     temperature: this.convertKelvinToFahrenheit(data.main.temp),
     description: data.weather[0].description
   }
 }

 private convertKelvinToFahrenheit(kelvin: number): number {
   return kelvin * 9 / 5 - 459.67
 }
}
