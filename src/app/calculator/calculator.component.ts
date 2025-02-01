import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})


export class CalculatorComponent {
  No1: number = 0;
  No2: number = 0;
  result: number | string = '';

  sum() {
    this.result = this.No1 + this.No2;
    console.log(this.result);
  }

  substraction() {
    this.result = this.No1 - this.No2;
    console.log(this.result);
  }

  multiplication() {
    this.result = this.No1 * this.No2;
    console.log(this.result);
  }

  division() {
    if (this.No2 === 0) {
      this.result = 'Error: Division by zero!';
    } else {
      this.result = this.No1 / this.No2;
    }
    console.log(this.result);
  }
}
