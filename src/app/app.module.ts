import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WeatherService } from './weather.service';
import { weather } from './weather'
import { kelvinToFar } from './kelvinToFar.pipe'

/** key is  0e38782cb130140be30552ed6f3ed8db 
 * 
 * api.openweathermap.org/data/2.5/weather?lat=35&lon=139
 * 
 * coords are 
 * 
 * http://api.openweathermap.org/data/2.5/weather?lat=43.074237&lon=-89.381012&appid=0e38782cb130140be30552ed6f3ed8db
 * 
 * 
 * function getData() {
fetch('http://api.openweathermap.org/data/2.5/weather?lat=43.074237&lon=-89.381012&appid=0e38782cb130140be30552ed6f3ed8db')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
  }
 * 
 * 
 * kelving temp conversion is  T(k) * 9/5 - 459.67
 * 
 * 
 * 
 * 
 */


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    kelvinToFar
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherService
  ]
})
export class AppModule {}
