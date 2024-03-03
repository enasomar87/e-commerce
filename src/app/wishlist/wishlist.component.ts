import { wishlistItem } from './../interface/wishlist';
import { Component } from '@angular/core';
import { WishliistService } from '../wishliist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {


 constructor(private _WishliistService:WishliistService , private toastr: ToastrService){

 }

 
 loggedUserToken:any ='';
 
 wishlistDetails: wishlistItem[] = [];
 wishlistId:any;

 ngOnInit(): void {
   let myToken = localStorage.getItem('token');
   this._WishliistService.getLoggedUserWishlist(myToken).subscribe({
     next: (response) => {
       console.log(response);
       this.wishlistDetails = response.data;
        this.wishlistId = response.data._id;
        
        getLoggedUserWishlist();
     },

     error: () => {},
   });
 }


 
 removeWishlistItem(pId: any) {
  let myToken = localStorage.getItem('token');
  this._WishliistService.removeWishlistItem(pId, myToken).subscribe({
    next: (response) => {
      this.wishlistDetails = response.data;
      this.wishlistId = response.data._id;
      
      this.showDelete();
    },
  });
}

showDelete() {
 this.toastr.error('product deleted !');
}

}
function getLoggedUserWishlist() {
  throw new Error('Function not implemented.');
}

