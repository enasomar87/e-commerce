import { ShoppingcartService } from './../shoppingcart.service';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthnService } from '../authn.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _AuthnService:AuthnService,private _ShoppingcartService:ShoppingcartService){}

  enableNavbar:any;
  // enableNavbar:boolean = this._AuthnService.isLogin;
  loggedUserName :any;

  numOfCartItems :any;

 ngOnInit(): void {

  // let myToken: any = localStorage.getItem('token');

  //   let decodedToken:any = jwtDecode(myToken);
   
  // this._AuthnService.userName.next(decodedToken.name);


this._AuthnService.userName.subscribe({
  next: (val) => {
    this.loggedUserName = val;
  }
})
  


this._AuthnService.isLogin.subscribe({
    next:(behaviorSubValue)=> {
    this.enableNavbar = behaviorSubValue;
    }
   })

   this._ShoppingcartService.numofcartitems.subscribe(
    {
      next :(val) =>{
        this.numOfCartItems = val;
      }
    }
  )



 }




 logOut(){
  this._AuthnService.logOut();
 }
}