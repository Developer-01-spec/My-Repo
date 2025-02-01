import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  age:number=30; // variiablename:datatype= value

  ages:number[]=[20,28,32,19,40];

  // Array of string

  state:string= "Telangana"

  states:string[]=['Andhra Pradesh','Telangana','Karnataka', 'Tamilnadu'];

  products:any[]=[
    {productname:"Book",price:50},
    {productname:"Shirt",price:500},
    {productname:"Mobile",price:5000},
    {productname:"Bike",price:50000},
    {productname:"Car",price:500000},
]

today:any= new Date();

}
