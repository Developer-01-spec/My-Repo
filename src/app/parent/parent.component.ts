import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
/*                       
store(value:number){
    alert(value);
  } 
*/

term:string='';
response:string='';
catch(value:string){
  this.response=value;
}
}

  
