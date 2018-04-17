import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { weather } from '../../app/weather';

import { WeatherService } from '../../app/weather.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  someTitle : string = "Weather App";

  public wet : weather;


  constructor(public navCtrl: NavController,
             private WeatherService: WeatherService) {

  }

  ngOnInit() {
    this.getWet();
    console.log("the weather is" + this.wet);
  }

  getWet(): weather {
    let wet : weather;

    this.WeatherService.getWet()
      .subscribe(
        response => { 
          console.log('Observer got a next value: ' + response);
          this.wet = new weather(
             response["main"]["temp"],  
             response["main"]['temp_min'],
             response["main"]['temp_max'],
             response["weather"][0]["description"]);
          } ,
        err => { 
          console.error('Observer got an error: ' + err) },   // just a demo so these are ok for now
        () => { 
          console.log('Observer got a complete notification') }
      );this
      return wet;
  }

}
