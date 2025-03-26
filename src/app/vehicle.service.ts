import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient:HttpClient) { }
  baseUrl:string="https://6128991386a213001729df.mockapi.io/test/v1/jurisdiction";

 getVehicles():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }

  getVehicle(id:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id);
  }


  getWeather():Observable<any>{
    return this._httpClient.get("https://api.open-meteo.com/v1/forecast?latitude=17.385044&longitude=78.486671&current_weather=true");
  }
 
  // getFilterVehicles(term:any):Observable<any>{
  //   return this._httpClient.get("baseUrl?filter="+term);
  // }
  getSortedVehicles(column:any,order:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }

  deleteVehicles(id:any):Observable<any>{
    return this._httpClient.get("baseUrl?sortBy/"+id);
  }

  getPaginatedVehicles(limit:any,page:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit="+limit+"&page="+page);
  }
  createVehicle(data:any):Observable<any>{
    return this._httpClient.post("baseUrl",data);
  }
  updateVehicle( id:any,data:any):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/"+id,data);
  }
}

