import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  //Two way Data Binding
mobile:string='+91';

//property Binding
isData:Boolean=true;


//Event binding
click(){
  alert("hellow")
} 
Submit(){
  alert(this.mobile);
}

submit(){
  alert("hi");
}


//Interpolation
age:number=45;
name:string='nava';


num1:number=0;
num2:number=0;
result:number=0;

add(){
  console.log(this.num1,this.num2);
  this.result=this.num1+this.num2;
  console.log(this.result);
}

}



