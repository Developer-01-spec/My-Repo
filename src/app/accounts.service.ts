import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _httpClient:HttpClient) { }
  getaccounts():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }

  getFilteredAccounts(keycolumn:string):Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter=" + keycolumn);
  }

  getSortedAccounts(colname:string,order:string):Observable<any>{
     return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+colname + "&order=" +order)
  }

  getPaginatedAccounts(limit:number,page:number):Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=" +limit + "&page=" +page);
  }

  deleteAccounts(id:number){
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/" +id);
  }
}
