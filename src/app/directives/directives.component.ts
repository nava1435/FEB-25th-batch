import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  isVisible:boolean=true;
states:string[]=['Andra pradesh','karnataka','Kerala','Maharastra','Tamilanadu','Telangzna'];



  products:any=[
    {name:'pen',price:10,rating:3.7},
    {name:'book',price:20,rating:3.8},
    {name:'shirt',price:500,rating:4.2},
    {name:'shoes',price:1999,rating:5.7},
    {name:'bike',price:10000,rating:3.7},
    {name:'car',price:100000,rating:3.7},
  ]
  newDate:any=new Date();
                                                                                        
}
