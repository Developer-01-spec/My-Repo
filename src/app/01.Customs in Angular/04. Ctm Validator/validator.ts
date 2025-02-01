 import { AbstractControl } from "@angular/forms";

 export function tcsMail(control:AbstractControl){

  if(control.value.includes('@tcs.com')){
    return null;

  } else{
    return { 'tcsMail':'Please use TCS mail'}
  }
 }

 // We can insert this tcsMail function in ts email validators formControl() in TS file. 

 // Next insert tcsMail in HTML component to display the error message.


 /*
 
 Abstract Control: 

 AbstractControl acts as the parent class for FormControl, FormGroup, and FormArray, providing a unified interface for handling form controls.
 
 
 */