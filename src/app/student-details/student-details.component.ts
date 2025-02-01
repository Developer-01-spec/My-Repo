import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentidService } from '../studentid.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  student:any=[];
  constructor(private _activatedRoute:ActivatedRoute, private _studentidService:StudentidService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);

        _studentidService.getStudentid(data.id).subscribe(
          (data:any)=>{
            this.student=data;
            console.log("data:", data)
          }
        )
      }
    )
  }

}
