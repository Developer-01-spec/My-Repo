import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent {

  
  id:number=0;

  constructor( private _activatedRoute:ActivatedRoute, private _vehicleService:VehicleService,private _router:Router){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;

        // Integrating with API

        _vehicleService.getVehicle(data.id).subscribe(
          
(data:any)=>{
  console.log(data);

  this.vehicleForm.patchValue(data);
}
        
        )

      }
    )
  }

public vehicleForm:FormGroup=new FormGroup(
   {
   Vehicle:new FormControl(),
   manufacturer: new FormControl(),
   type:new FormControl(),
   fuel: new FormControl(),
   color:new FormControl(),
   image:new FormControl(),
   cost:new FormControl(),
  }
  )
  create(){
    console.log(this.vehicleForm.value);
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe((data:any)=> {
      console.log(data);
      alert("Vehicle created Successfully");
      // this._router.navigate(["/vehicle"]);
      this._router.navigateByUrl("/dashboard/vehicle")
    },(error:any)=>{
      alert("Internal Server Error");
    }
  )
  };


  submit(){

    //Update Vehicle Details

    if(this.id){
      this._vehicleService.updateVehicle(this.id,this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("Updated Successfully..!");
          this._router.navigateByUrl("/welcome/vehicle");
        },(error:any)=>{
          alert("internal Server Error");
        }
      )

      // Create Vehicle
   }else{
    console.log(this.vehicleForm.value);
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(

      (data:any)=>{
        console.log(data);
        alert("Vehicle Created Successfully");

        this._router.navigateByUrl("/vehicle")
      },(error:any)=>{
        alert("Internal Server Error")
      }
    )
      }
}


}


