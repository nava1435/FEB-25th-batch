import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  weight: number = 0; // Weight in kg
  height: number = 0; // Height in meters
  bmi: number | null = null;
  category: string = '';

  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      this.bmi = this.weight / (this.height * this.height);
      this.setCategory();
    } else {
      this.bmi = null;
      this.category = 'Please enter valid values';
    }
  }

  setCategory() {
    if (this.bmi !== null) {
      if (this.bmi < 18.5) {
        this.category = 'Underweight';
      } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
        this.category = 'Normal weight';
      } else if (this.bmi >= 25 && this.bmi < 29.9) {
        this.category = 'Overweight';
      } else {
        this.category = 'Obese';
      }
    }
  }
}