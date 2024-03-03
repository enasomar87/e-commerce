import { Allorders } from './../interface/allorders';
import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from '../shoppingcart.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent {

  constructor(private _ShoppingcartService:ShoppingcartService){}
  Allorders:any ;
  order:Allorders[] = [];
    
  ngOnInit(){
    let myToken = localStorage.getItem('token');
    console.log(myToken);
    
    this._ShoppingcartService.UserOrders(myToken)

  }
}
