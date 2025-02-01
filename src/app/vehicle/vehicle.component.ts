import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  vehicles:any=[];
  constructor(private _vehicleService:VehicleService){
    this.pageload();
  
  }
  
pageload(){
   this._vehicleService.getvehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      }
    )
  }
 
 keyword:string="";
 
  filter(){
    this._vehicleService.getfilteredVehicles(this.keyword).subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      },(err:any)=>{                          // This is used for any errors in this server
        alert("Internal Server Error");
      }
    )
  }
  columnname:string="";
  order:string="";
  sort(){
    this._vehicleService.getSortedVehicles(this.columnname,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);

      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  limit:number=0;
  page:number=0;

  pagination(){
    this._vehicleService.getPaginatedVehicles(this.limit,this.page).subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      }, (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  delete(id:number){
    if(confirm("Are you sure to delete this record?")==true){
      this._vehicleService.deleteVehicle(id).subscribe(
        (data:any)=>{
          alert("Internal Server Error");
        }
      )
    } else{
      alert("You have cancelled..!")
    }
  }

  
}
