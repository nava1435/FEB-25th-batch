import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
weather:any=[]

constructor(private _weatherservice:VehicleService){
  _weatherservice.getWeather().subscribe(
  (data:any)=>{
    console.log(data);
    this.weather=data;
    
  },(err:any)=>{
    alert("weather condition is cool")
  }
      
) 
}

}
//---------

