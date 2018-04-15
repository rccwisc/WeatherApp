import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePipe } from '@angular/common';

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
    let datePipe = new DatePipe('en-US');
    let myFormattedDate;

    this.WeatherService.getWet()
      .subscribe(
        response => { 
          console.log('Observer got a next value: ' + response);
          myFormattedDate = datePipe.transform(response["dt"], 'mediumTime');
          this.wet = new weather(
             response["main"]["temp"],  
             response["main"]['temp_min'],
             response["main"]['temp_max'],
             response["weather"][0]["description"],
            myFormattedDate);
          } ,
        err => { 
          console.error('Observer got an error: ' + err) },
        () => { 
          console.log('Observer got a complete notification') }
      );this
      return wet;
  }

}
