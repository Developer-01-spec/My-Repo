import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  
  name:string="Anil";
  age:number=30;
  email:string="aanil353@gmail.com";

  isIndian:boolean=true;

  num1:number=0;
  num2:number=0;
  result:number=0;

  sum(){
    this.result=this.num1 + this.num2;
    console.log(this.result);
  }

  user:any={
    name:"Anil",
    age:30,
    email:"aanil353@gmail.com"
  }
  
  
  
  
  Submit(){
    alert("Clicked submit button")
  }
  }
