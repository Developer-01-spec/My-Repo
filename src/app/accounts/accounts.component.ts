import { Component } from '@angular/core';
import { AccountsService } from "../accounts.service";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})

export class AccountsComponent {
  
  accounts:any=[];
  constructor(private _accountsService:AccountsService){
    _accountsService.getaccounts().subscribe((data:any)=>{
      this.accounts=data;
      console.log(this.accounts);
    })
  }


  keycolumn:string="";
  filter(){

  this._accountsService.getFilteredAccounts(this.keycolumn).subscribe((data:any)=>{
    this.accounts=data;
    console.log(this.accounts);
  },(err:any)=>{
    alert("Internal Server Error")
  })
  }

  colname:string="";
  order:string="";
  sort(){
    this._accountsService.getSortedAccounts(this.colname,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
        console.log(this.accounts);
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  limit:number=0;
  page:number=0;
  pagination(){
    this._accountsService.getPaginatedAccounts(this.limit,this.page).subscribe((data:any)=>{
        this.accounts=data;
        console.log(this.accounts);
    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
  }

  delete(id:number){
    if(confirm("Are you sure to delete this record?")==true){
      this._accountsService.deleteAccounts(id).subscribe((data:any)=>{
        alert("Internal Server Error");
      }
    )
    }else{
      alert("You have cancelled..!")
    }
  }

}
