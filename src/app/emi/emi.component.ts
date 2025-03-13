import { Component } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {
  principal: number = 0;
  rate: number = 0;
  tenure: number = 0;
  emi: number | null = null;

  calculateEMI() {
    if (this.principal > 0 && this.rate > 0 && this.tenure > 0) {
      const monthlyRate = this.rate / 12 / 100;
      this.emi =
        (this.principal * monthlyRate * Math.pow(1 + monthlyRate, this.tenure)) /
        (Math.pow(1 + monthlyRate, this.tenure) - 1);
    } else {
      this.emi = null;
    }
  }
}
