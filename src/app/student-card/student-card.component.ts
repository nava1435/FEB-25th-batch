import { Component } from '@angular/core';
import { StudentcardService } from '../studentcard.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {

 card: any;
  studentcard: any;
  getstudentcard: any;

// ===========================================================
  constructor(private studentcardService:StudentcardService){
  
    studentcardService.getstudentcard().subscribe(
      (data:any)=>{
        console.log(data);
        this.studentcard=data;
      },(err:any)=>{
        alert('server error')
      }
    )
}
}
// ============================================