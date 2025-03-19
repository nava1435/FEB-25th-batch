import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient:HttpClient) { }

 getVehicles():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  }
  getWeather():Observable<any>{
    return this._httpClient.get("https://api.open-meteo.com/v1/forecast?latitude=17.385044&longitude=78.486671&current_weather=true");
  }
 
}

