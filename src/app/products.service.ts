import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  getProduct():Observable<any>{

   return this. _HttpClient.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  

  getCategories():Observable<any>{

    return this. _HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
   }

   getSingleProduct(id:number):Observable<any>{

    return this. _HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
   }


   
}
