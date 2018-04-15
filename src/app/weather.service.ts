import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { weather } from './weather';



@Injectable()
export class WeatherService {

private weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=43.074237&lon=-89.381012&appid=0e38782cb130140be30552ed6f3ed8db';
//private handleError: HandleError;

  constructor(private http: HttpClient,) { }

  getConfig() {
    return this.http.get<weather>(this.weatherUrl);
  }

  getWet(): Observable<weather> {
           return this.getConfig();   
  }

}