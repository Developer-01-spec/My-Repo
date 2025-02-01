import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

constructor( private _httpclient:HttpClient) { }
login(data:any):Observable<any>{

  return this._httpclient.post("https://reqres.in/api/login",data);
}

}
