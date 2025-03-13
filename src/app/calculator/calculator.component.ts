// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-calculator',
//   templateUrl: './calculator.component.html',
//   styleUrls: ['./calculator.component.css']
// })
// export class CalculatorComponent {

// num1:number=0;
// num2:number=0;
// result:number=0;

// add(){
//   console.log(this.num1,this.num2);
//   this.result=this.num1+this.num2;
//   console.log(this.result);

// }
// sub(){
//   console.log(this.num1,this.num2);
//   this.result=this.num1-this.num2;
//   console.log(this.result);

// }
// mul(){
//   console.log(this.num1,this.num2);
//   this.result=this.num1*this.num2;
//   console.log(this.result);

// }
// div(){
//   console.log(this.num1,this.num2);
//   this.result=this.num1/this.num2;
//   console.log(this.result);

// }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  operation: string = '';

  calculate(op: string) {
    switch (op) {
      case 'add':
        this.result = this.num1 + this.num2;
        this.operation = 'Addition';
        break;
      case 'sub':
        this.result = this.num1 - this.num2;
        this.operation = 'Subtraction';
        break;
      case 'mul':
        this.result = this.num1 * this.num2;
        this.operation = 'Multiplication';
        break;
      case 'div':
        if (this.num2 !== 0) {
          this.result = this.num1 / this.num2;
          this.operation = 'Division';
        } else {
          this.result = NaN;
          this.operation = 'Cannot divide by zero';
        }
        break;
    }
  }
}