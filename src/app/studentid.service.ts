import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentidService {

  baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/student"

  constructor(private _httpClient:HttpClient) { }
  getstudentid():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }

  getfilteredStudentid(keyword:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter=" +keyword)
  }

  getSortedStudents(columnname:string,order:string):
  Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+columnname + "&order=" +order);
  }

  getPaginatedStudents(limit:number,page:number):Observable<any>{
 return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit=" +limit + "&page=" +page)

  }

  deleteStudentid(id: number){
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/" +id);
  }

  createStudentid(data:any){
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data)
  }

// This is For Student-details component

getStudentid(id:number):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/" +id)
}

updateStudentid(id:number,data:any){
  return this._httpClient.put( "https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id,data);
}

}
