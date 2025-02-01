import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent {
  num1:number=0;
  num2:number=0;
  result:number=0;
  bmi:string="";

  submit(){
    this.result=this.num2/(this.num1*this.num1);
    // alert(this.result)

   if (this.result<18.5 && this.result>0){
      this.bmi= "underweight";}

  
  else if(this.result>=18.5 && this.result<25)
    { this.bmi="Normal";}
   

  else if(this.result>=25 && this.result<30)
    { this.bmi="overweight";}
   
  else if(this.result>=30 && this.result<35)
    { this.bmi="Obese";}
   
  else if (this.result>=35 && this.result<40)
    { this.bmi="severely obese";}
   
    else 
    
    { this.bmi="Morbidly obese";};}

}
