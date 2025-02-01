import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {

  length:number=0;
  breadth:number=0;
  result:number=0;

  perimeter(){
    this.result= 2*(this.length + this.breadth)
    console.log(this.result);
  }

  area(){
  this.result= this.length * this.breadth;
  console.log(this.result);
 }

}
