import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formsassignment',
  templateUrl: './formsassignment.component.html',
  styleUrls: ['./formsassignment.component.css']
})
export class FormsassignmentComponent {

  public userForm:FormGroup=new FormGroup({
      name:new FormControl(''),
      class:new FormControl(''),
      email:new FormControl(''),
      fathername: new FormControl(''),
      dob: new FormControl(''),

    address:new FormGroup({
               addressline:new FormControl(),
               city:new FormControl(),
               state:new FormControl(),
            pincode:new FormControl('', [ Validators.required, Validators.min(100000), Validators.max(99999)])
      }),

      marks: new FormGroup(
        {
          class: new FormControl,
          year: new FormControl,
          percentage: new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]),
        }
      ),
      
      
      
      type:new FormControl(),
      // busfee:new FormControl(),
      // hostelfee:new FormControl(),
      marks1: new FormArray([])
    });
    
    get marksFormArray(){
      return this.userForm.get('marks1') as FormArray
    }
  
    addmarks(){
      this.marksFormArray.push(
        new FormGroup({
          class:new FormControl(),
          year:new FormControl(),
          percentage:new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]),
        })
      )
    }
  
    delete(i:number){
  
      this.marksFormArray.removeAt(i);
    }
  
    constructor(){
      this.userForm.get('type')?.valueChanges.subscribe(
        (data:any)=>{
          if(data=='dayscholar'){
            this.userForm.addControl('busfee',new FormControl());
            this.userForm.removeControl('hostelfee');
          } else{
            this.userForm.addControl('hostelfee',new FormControl());
            this.userForm.removeControl('busfee');
        }
       }
      )
    }
  
    create(){
      console.log(this.userForm.value);
    }
  
  }

