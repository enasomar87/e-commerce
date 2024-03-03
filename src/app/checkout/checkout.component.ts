import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShoppingcartService } from '../shoppingcart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  constructor(private _shoppingcartService:ShoppingcartService ,private _ActivatedRoute:ActivatedRoute){}

checkoutForm =new FormGroup({
  details : new FormControl(''),
  phone : new FormControl(''),
  city : new FormControl('')
})

proceedToCheckOut(form:any){
  console.log(form);
  if(form.valid){
 let cartId = this._ActivatedRoute.snapshot.params['cartId'];
 let mytoken = localStorage.getItem('token');

 this._shoppingcartService.onlinePayment(cartId,mytoken, form.value).subscribe({
  next:(resp) =>{
    console.log(resp);
    location.href = resp.session.url
     },
     error: (err) => {
      console.log(err);
      
     }
 })
  }
}



}
