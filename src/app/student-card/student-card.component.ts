import { Component } from '@angular/core';
import { StudentcardService } from '../studentcard.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {
term:string = '';
 card: any;
  student: any;
  getstudentcard: any;

// ===========================================================
  constructor(private studentService:StudentcardService){
    studentService.getstudents().subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
        console.log(this.student);
      },
      (err:any)=>{
        alert('server error')
      }
    )
}

filter(){
  this.studentService.getFilterStudents(this.term).subscribe(
(data:any)=>{
console.log(data);
},
(err:any)=>{
  alert('internal Server Error');

}
  );
}
column: string='';
order: string='';
sort(){
  this.studentService.getSortedStudents(this.column, this.order).subscribe(
    (data:any)=>{
      console.log(data);
      this.student =data;
      
    },
    (err:any)=>{
      alert('Internal Server Error');
    }
  );
}

loadStudents(){
  this.studentService.getstudents().subscribe(
(data:any)=>{
  console.log(data);
 
},(err:any)=>{
  alert('Internal server error')
}

  );
}
loadstudents(){
this.studentService.getstudents().subscribe(
  (data:any)=>{
    console.log(data);
    // console.log(this.student);
    
    
  },
  (err:any)=>{
    alert("Internal server error")
  }
);
}

delete(id:any){
  if(confirm('Are you sure to delete') == true){
this.studentService.deleteStudents(id).subscribe(
  (data:any)=>{
    alert("Record delete succesfully")
  },
  (err:any)=>{
    alert('Internal server error')
  }
);

  }else{
    alert('you have cancelled');
  }

}
limit: string='';
page:string='';
pegination(){
  this.studentService.getstudents().subscribe(
    (data:any)=>{
      console.log(data);
      console.log(this.student);
      
      
    },(err:any)=>{
      alert("Internal server error")
    }
  );
}


}

// ============================================

