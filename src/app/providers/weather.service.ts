import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  apiKey:string = '';
  url
  constructor(
    http:HttpClient,
  ) { 
    this.url
  }
}
