import { ReadPropExpr } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees: any = [
    { name: 'Sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'Amar', experience: 5, package: 1300000, role: 'UIDeveloper' },
    { name: 'Raj', experience: 3, package: 1600000, role: 'UIDeveloper' },
    { name: 'Sunil', experience: 2, package: 1200000, role: 'UIDeveloper' },
    { name: 'Latha', experience: 5, package: 600000, role: 'Software Developer' },
    { name: 'Rama', experience: 1, package: 1400000, role: 'Software Developer' },
    { name: 'Smitha', experience: 2, package: 1600000, role: 'Data Engineer' },
    { name: 'John', experience: 5, package: 700000, role: 'Data Engineer' },
    { name: 'David', experience: 2, package: 400000, role: 'Data Engineer' },
    { name: 'Smith', experience: 1, package: 300000, role: 'Testing Engineer' },
    { name: 'Sujith', experience: 3.5, package: 350000, role: 'Testing Engineer' },
  ]

delete(i:number){
this.employees.splice(i,1); // splice(i,0, x) x is newly adding value, we can add only a element in the array by using splice we must put 0, after the indexing the number.
}

  sort(){
    this.employees.sort((a:any, b:any)=> b.package-a.package);
  }
  sort1(){
    this.employees.sort((a:any, b:any)=> a.package-b.package);
  }


  // role:any=""; // firstly we can set one variable for role
  roleFilter(){
  this.employees=this.employees.filter((employee:any)=>employee.role==this.role);
                     // => Arrow function is used to return the values
  }
   text:string="";
   search(){
    this.employees=this.employees.filter((employee:any)=>employee.name.includes(this.text))

    // The includes() method in JavaScript is an array method used to check whether a specific element exists in an array. It returns 'true' if the element is found and 'false' otherwise.

    // array.includes(searchElement, fromIndex);

   }

   hike(){

    this.employees=this.employees.map((employee:any)=> {
      employee.package=employee.package+50000;
      return employee
    })
   }

   cost(){
    let totalcost=this.employees.reduce((sum:any, employee:any)=> sum+employee.package,0)
    alert(totalcost)
   }

name:string="";
experience:number=0;
package:number=0;
role:string=""

   add(){
    let employee={
      name:this.name,
      experience:this.experience,
      package:this.package,
      role:this.role
    };
    this.employees.unshift(employee);
   }
  }


