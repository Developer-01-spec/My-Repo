import { Component } from '@angular/core';
import { StudentidService } from '../studentid.service';
import { Observable, subscribeOn } from 'rxjs';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-studentid',
  templateUrl: './studentid.component.html',
  styleUrls: ['./studentid.component.css']
})
export class StudentidComponent {
// [x: string]: any;
  data: any;
  idview: any;
 
  create() {
  throw new Error('Method not implemented.');
  }


    idcard:any=[]
    
    constructor (private _studentidService:StudentidService){
  
     this.pageload();
      
    }
  
    pageload(){
      this._studentidService.getstudentid().subscribe(
  
        (data:any)=>{
          this.idcard=data;
          console.log(this.idcard);
        },(err:any)=>{
             alert("Error occured")
        }
      )
    }
  
    
  
    term:string="";
    filter(){
      this._studentidService.getfilteredStudentid(this.term).subscribe(
        (data:any)=>{
        this.idcard=data;
        console.log(this.idcard);  
        }, (err:any)=>{
          alert("Error occured")
        }
      )
    }
  
  
    column:string="";
    order:string="";
  
    sort(){
      this._studentidService.getSortedStudents(this.column,this.order).subscribe(
        (data:any)=>{
          this.idcard=data;
          console.log(this.idcard);  
          }, (err:any)=>{
            alert("Error occured")
          }
      )
    }
  
  
    limit:number=0;
    page:number=0;
  
    pagination(){
      this._studentidService.getPaginatedStudents(this.limit,this.page).subscribe(
        (data:any)=>{
          this.idcard=data;
          console.log(this.idcard);  
          }, (err:any)=>{
            alert("Error occured")
          }
      )
    }
  
    delete(id:number){
      if(confirm("Are you sure to delete?")===true){
        this._studentidService.deleteStudentid(id).subscribe(
          (data:any)=>{
            alert("Deleted Sucessfully");
            this.pageload();
             
            }, (err:any)=>{
              alert("Error occured")
            }
        )
  
      }
  
    }

}
    
  
