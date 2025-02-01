import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

  num1:number=0;
  result:number=0;

  diameter(){
    this.result= this.num1 *2
    console.log(this.result);
  }

  circumference(){
    this.result=  2 * 3.14 * this.num1
    console.log(this.result);
  }

  area(){
    this.result=3.14 * this.num1 * this.num1
  }

}
