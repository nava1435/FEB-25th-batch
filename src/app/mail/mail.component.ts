import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
mail:any;
constructor(private _mailService:MailService){
  _mailService.getMail().subscribe(
    (data:any)=>{ 
      console.log(data);
      this.mail=data;
    },(err:any)=>{
      alert("Internal server error")
    }
  )
}

}



//---------------
  // vehicles:any;

  //       this.vehicles=data;
  //      }, (err:any)=>{
  //         alert("Internal server Error");
  //       }
      
  //   )
  // }
