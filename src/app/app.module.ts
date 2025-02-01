import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CircleComponent } from './circle/circle.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BMIComponent } from './bmi/bmi.component';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { MyntraComponent } from './myntra/myntra.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MailComponent } from './mail/mail.component';
import { NewVehicleComponent } from './new-vehicle/new-vehicle.component';
import { StudentidComponent } from './studentid/studentid.component';
import { NewstudentidComponent } from './newstudentid/newstudentid.component';
import { PintrestComponent } from './pintrest/pintrest.component';
import { FormUsercreationComponent } from './form-usercreation/form-usercreation.component';
import { FormsassignmentComponent } from './formsassignment/formsassignment.component';
import { LoginComponent } from './login/login.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingsComponent } from './ratings/ratings.component';
import { TokenInterceptor } from './token.interceptor';





@NgModule({
  declarations: [	
    AppComponent,
    DataBindingComponent,
    CircleComponent,
    WelcomeComponent,
    RectangleComponent,
    CalculatorComponent,
    BMIComponent,
    HomeComponent,
    DirectivesComponent,
    EmployeeComponent,
    FlipcartComponent,
    VehicleComponent,
    MyntraComponent,
    AccountsComponent,
    MailComponent,
    NewVehicleComponent,
    StudentidComponent,
    NewstudentidComponent,
    PintrestComponent,
    FormUsercreationComponent,
    FormsassignmentComponent,
    LoginComponent,
    VehicleDetailsComponent,
    StudentDetailsComponent,
    Sibling1Component,
    Sibling2Component,
    ParentComponent,
    ChildComponent,
    RatingsComponent,
    
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // [(ngModel)] is inside the forms module
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
   {
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi:true
   } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



