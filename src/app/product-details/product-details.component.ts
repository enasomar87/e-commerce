import { SingleProduct } from './../interface/products';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  SingleProduct : any = null

constructor(private _ProductsService:ProductsService , private _ActivatedRoute:ActivatedRoute){}

ngOnInit():void {

let x = this._ActivatedRoute.snapshot.params['productId'];

  this._ProductsService.getSingleProduct(x).subscribe( (response)=>{
    
    this.SingleProduct= response.data;
    console.log(response.data);
  } )
}


}
