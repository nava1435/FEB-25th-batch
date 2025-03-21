import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})

//collecting the data for form group
export class CreateVehicleComponent {
public vehicleForm:FormGroup=new FormGroup({
  Vehicle:new FormControl(),
  color:new FormControl(),
  cost:new FormControl(),
  fuel:new FormControl(),
})
constructor(private vehicleService:VehicleService,private _router:Router){}
create(){
  console.log(this.vehicleForm.value);
  // this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
  this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("new Vehicle created Succesfully");
   this._router.navigateByUrl("/dashboard/vehicle");
    },(err:any)=>{
      alert("Internal Server Error")
    }
  )
}
}
