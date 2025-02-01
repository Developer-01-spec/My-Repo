import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { max } from 'rxjs';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component {

  // count:number=0;

  // constructor( private _commonService:CommonService){}

  // send(){
  //   this._commonService.countSub.next(this.count)
  // }
  
  textValue: string = '';
  maxLength=30;
  remainingCharacters: number = this.maxLength;

  constructor(private _commonService: CommonService) {}

   Input() {
    this.remainingCharacters = this.maxLength - this.textValue.length;
    this._commonService.setText(this.textValue);
  }

}
