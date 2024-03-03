import { products } from './../interface/products';
import { Data } from './../interface/cartproduct';
import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from '../shoppingcart.service';
import { ProductElementCart } from '../interface/cartproduct';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(
    private _ShoppingcartService: ShoppingcartService,
    private toastr: ToastrService
  ) {}

  cartDetails: ProductElementCart[] = [];
  totalPrice = 0;
  currentCount = 0;
  cartId:any;
  

  ngOnInit(): void {
    let myToken = localStorage.getItem('token');
    this._ShoppingcartService.getLoggedUserCart(myToken).subscribe({
      next: (response) => {
        console.log(response);
        this.cartId = response.data._id
        this.cartDetails = response.data.products;
        this.totalPrice = response.data.totalCartPrice;
      },

      error: () => {},
    });
  }

  updateProductQunty(newCount: any, pid: any) {
  
    let myToken = localStorage.getItem('token');
    this._ShoppingcartService.updateProductQnty(newCount, myToken, pid).subscribe({
        next: (response) => {
          console.log(response);
          this.cartDetails = response.data.products;
          this.totalPrice = response.data.totalCartPrice;
          this.toastr.show('product count updated')
        },
      });
  }

  removeItem(pId: any) {
    let myToken = localStorage.getItem('token');
    this._ShoppingcartService.removeCartItem(pId, myToken).subscribe({
      next: (response) => {
        this.cartDetails = response.data.products;
        this.totalPrice = response.data.totalCartPrice;
        this.showDelete();
      },
    });
  }

  showDelete() {
    this.toastr.error('product deleted !');
  }
}
