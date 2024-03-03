import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishliistService {

  constructor(private _HttpClient:HttpClient) { }



  addToWishlist(pId:any ,mytoken:any){
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist',  {productId:pId}, {headers:{token: mytoken}})
    }


    getLoggedUserWishlist(mytoken:any):Observable<any>{
      return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
        headers:{
          token:mytoken
        }
      })
    }


    removeWishlistItem(pId:any , myToken:any):Observable<any>{
      return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${pId}`, {
        headers: {token :myToken}
      } )
    }


}
