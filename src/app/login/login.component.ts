import { Component,} from '@angular/core';
import { LoginService } from '../Login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  public loginForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password: new FormControl(),
  })

  constructor(private _loginService:LoginService, private _router:Router) { }
  login(){
    console.log(this.loginForm.value);
    this._loginService.login(this.loginForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("login successfully Completed..!")
      sessionStorage.setItem('token',data.token);
      // Welcome page navigation
      this._router.navigateByUrl("/welcome")
    }, (error:any)=>{
      alert("Invalid Credentials")
    }
  )
    
  }

 

}
