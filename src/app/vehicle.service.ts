import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  /*
  Custom API: 
 baseUrl:string="/assets/data.json"
 */  




// By using optimizing the code to less complexity we can declare a variable for this URL 

baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"

  constructor(private _httpClient:HttpClient) { }
  getvehicles():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }
  
  getfilteredVehicles(keyword:string):Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter=" +keyword);

  /*  getfilteredVehicles(keyword:string):Observable<any> {

      return this._httpClient.get(this.baseUrl + "filter="+keyword);

  */

      // This baseUrl also apply the below url
  
  }

  getSortedVehicles(columnname:string, order:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+columnname + "&order="+ order);
}

 getPaginatedVehicles(limit:number, page:number):Observable<any> {
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=" +limit + "&page=" +page)
 }

 deleteVehicle(id:number){
  return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/" +id);
 }

 createVehicle(data:any){
  return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data)
 }
  getVehicle(id:number):Observable<any>{

    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/" + id)
  }

  updateVehicle(id:number,data:any){

    return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/" +id,data)
  }

  }

  

