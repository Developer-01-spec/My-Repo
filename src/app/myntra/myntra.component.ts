import { Component } from '@angular/core';
import { MyntraService } from "../myntra.service";

@Component({
  selector: 'app-myntra',
  templateUrl: './myntra.component.html',
  styleUrls: ['./myntra.component.css']
})
export class MyntraComponent {
  myntra:any=[];
  constructor(private _myntraService:MyntraService){
    _myntraService.getmyntra().subscribe(
      (data:any)=>{
        this.myntra=data;
        console.log(this.myntra)
      }
    )
  }

}
