import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
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
import { AuthenticationGuard } from './authentication.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingsComponent } from './ratings/ratings.component';




const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"login", component:LoginComponent},
 
  { path: "welcome", canActivate:[AuthenticationGuard],component:WelcomeComponent, children:[
    {path:"home",component:HomeComponent},
    { path: "databinding", component: DataBindingComponent },
    { path:"calculator", component:CalculatorComponent},
    { path: 'rectangle', component: RectangleComponent },
    { path: 'circle', component: CircleComponent },
    { path: 'bmi', component: BMIComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'employee',component:EmployeeComponent},
    {path:'flipcart',component:FlipcartComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'myntra',component:MyntraComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'mail',component:MailComponent},
    {path:"new_vehicle",component:NewVehicleComponent},
    {path:"studentid",component:StudentidComponent},
    {path:"newstudentid",component:NewstudentidComponent},
    {path:"pintrest",component:PintrestComponent},
    {path:"usercreation",component:FormUsercreationComponent},
    {path:"formsassignment", component:FormsassignmentComponent},
    {path:"vehicle-details/:id",component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:NewVehicleComponent},
    {path:"student-details/:id",component:StudentDetailsComponent},
    {path:"edit-student/:id",component:NewstudentidComponent},
    {path:"sibling1", component:Sibling1Component},
    {path:"sibling2", component:Sibling2Component},
    {path:"parent", component:ParentComponent},
    {path:"child", component:ChildComponent},
    {path:"ratings", component:RatingsComponent},

    

  
    
    ]
}
 
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
