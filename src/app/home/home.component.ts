import { products } from './../interface/products';
import { WishliistService } from './../wishliist.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category,  } from '../interface/products';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from '../shoppingcart.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

ProductContainer :products[] =[];
AllCategories : Category[] =[];
mySearchWord : string ='';
loggedUserToken:any ='';

getProductSubscription = new Subscription();
getCategoriesSubscription = new Subscription();
addToCartSubscription = new Subscription();

isInWishList = false;



  constructor(private _ProductsService:ProductsService,private _ShoppingcartService:ShoppingcartService, private toastr: ToastrService ,private _WishliistService:WishliistService){}

ngOnInit(): void{

this.loggedUserToken = localStorage.getItem('token');

this._ProductsService.getProduct().subscribe(
  {
    next: (response)=>{
     this.ProductContainer = response.data
      // console.log( this.ProductContainer)
    },
      
    error: (err)=>{console.log(err)}
  }
)

this._ProductsService.getCategories().subscribe(
  {
    next: (response)=>{
     this.AllCategories = response.data
      console.log(this.AllCategories )
    },
      
    error: (err)=>{console.log(err)}
  }
)
}

addToCart (pId:string){
  
this._ShoppingcartService.addToCart(pId , this.loggedUserToken).subscribe({
  next: (response) =>{
    console.log(response)
    this._ShoppingcartService.numofcartitems.next(response.numOfCartItems);
    //  this.toggleWishList();
  

    this.showSuccess()
  },
  error: (err) =>{console.log(err);
  }
})
}



showSuccess() {
  this.toastr.success('product added to cart successfully');
}

ngOnDesrtoy(): void{
  this.getProductSubscription.unsubscribe()
  this.getCategoriesSubscription.unsubscribe()
  this.addToCartSubscription.unsubscribe()
}


addToWishlist (pId:string){

  this._WishliistService.addToWishlist(pId , this.loggedUserToken).subscribe({
    next: (resp) => {
      console.log(resp);
      this.toastr.success('product added to wishlist');
      this.toggleWishList(pId)
    }
  })
}

toggleWishList(pId:any){
  this.isInWishList = !this.isInWishList }

}
