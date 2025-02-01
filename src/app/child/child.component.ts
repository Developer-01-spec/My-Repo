import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // @Input() a:number=0;   // This is for Parent -> Child communication

  /*
    @Output() bEvent:EventEmitter<number>=new EventEmitter()
  
    send(){
        this.bEvent.emit(2345);     
       } 
  */

  moon:string='';

  @Input() star:string='';

  @Output() sEvent: EventEmitter<string>= new EventEmitter()

  send(){
    this.sEvent.emit(this.moon);
  }

}
