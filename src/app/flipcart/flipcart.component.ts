import { Component } from '@angular/core';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.css']
})
export class FlipcartComponent {
delete(_t65: number) {
throw new Error('Method not implemented.');
}

  Products:any=[
 { ProductName:'Pen', ProductPrice:5,Rating:3,FreeDelivery:'true'},
 { ProductName:'Book',ProductPrice:10,Rating:5,FreeDelivery:'true'},
 { ProductName:'Pencil',ProductPrice:3,Rating:3.4,FreeDelivery:'false'},
 { ProductName:'Bag',ProductPrice:100,Rating:4,FreeDelivery:'true'},
 { ProductName:'Eraser',ProductPrice:2,Rating:2.8,FreeDelivery:'true'},
 { ProductName:'Shoes',ProductPrice:120,Rating:5,FreeDelivery:'false'},
 { ProductName:'Tie',ProductPrice:30,Rating:2.7,FreeDelivery:'true'},
 { ProductName:'Pen',ProductPrice:5,Rating:3.1,FreeDelivery:'true'}
];

// Form Input
ProductName:string="";
ProductPrice:number=0;
Rating:number=0;
FreeDelivery:boolean=true;

add(){
    let Products={
      ProductName:this.ProductName,
      ProductPrice:this.ProductPrice,
      Rating:this.Rating,
      FreeDelivery:this.freedelivery
    };
    this.Products.unshift(Products);
   };

 // Buttons

 // Search Button

 text1:string =" ";

 search2() {
   this.Products = this.Products.filter((product:any) => product.ProductName.includes(this.text1)
   );
 }
 

  freedelivery(){

    this.Products=this.Products.filter((product:any)=>product.FreeDelivery=='true')
    };

    // Prices High to Low
   psort2(){
    this.Products.sort((a:any, b:any)=> b.ProductPrice-a.ProductPrice);
  };

   // Prices Low to High
  psort1(){
    this.Products.sort((a:any, b:any)=> a.ProductPrice-b.ProductPrice);
  };

  // Rating High to Low

  prating1(){
    this.Products.sort((a:any, b:any)=> b.Rating-a.Rating);
  };
  // Rating Low to High
  prating2(){
    this.Products.sort((a:any, b:any)=> a.Rating-b.Rating);
  };

 //Apply 50% Discount
  discount(){

    this.Products=this.Products.map((product:any)=> {
      product.ProductPrice=product.ProductPrice*0.5;
      return product
    })
  };

  //Total Price

  tprice(){
    let totalprice=this.Products.reduce((sum:any, product:any)=> sum+product.ProductPrice,0)
    alert(totalprice)
   };

   delivery(){

    this.Products=this.Products.map((product:any)=>{
      if(
        product.FreeDelivery=false){
          product.ProductPrice=product.ProductPrice + 150;
        }
        return this.Products
    } )
    };
   }




