import { User } from './interface/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  numofcartitems =new BehaviorSubject(0);
 

  constructor(private _HttpClient:HttpClient) { }

addToCart(pId:string, userToken:string):Observable<any>{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart', {productId:pId}, {headers:{token: userToken}})
}


getLoggedUserCart(mytoken:any):Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart', {
    headers:{
      token:mytoken
    }
  })
}


updateProductQnty(pCount:any , myToken:any , pId:any):Observable<any>{

  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${pId}`, {count:pCount}, {
    headers: {token :myToken}
  } )
}


removeCartItem(pId:any , myToken:any):Observable<any>{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${pId}`, {
    headers: {token :myToken}
  } )
}


onlinePayment(cartId:any , myToken:any, address:any) :Observable<any>{

  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200` , {shippingAddress: address}, {headers: {token:myToken}})

}

UserOrders(cartId:any):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${cartId}`)
}

}
