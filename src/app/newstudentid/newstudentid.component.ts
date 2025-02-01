import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentidService } from '../studentid.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newstudentid',
  templateUrl: './newstudentid.component.html',
  styleUrls: ['./newstudentid.component.css']
})
export class NewstudentidComponent {

  id:number=0;

  constructor( private _activatedRoute:ActivatedRoute, private _studentidService: StudentidService, private _router:Router){

    _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      this.id=data.id;

      // Integrating with API

    _studentidService.getStudentid(data.id).subscribe(

      (data:any)=>{
        console.log(data);
        this.studentForm.patchValue(data);
      }
    )
      
    }
    )
  }

  public studentForm:FormGroup=new FormGroup(
    {
      name: new FormControl(),
      phone:new FormControl(),
      city:new FormControl(),
      dob:new FormControl(),
    }
  )

}