import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginData, User } from './interface/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthnService {
  
  isLogin = new BehaviorSubject(false);
  userName = new BehaviorSubject('')

  constructor(private _HttpClient:HttpClient, private _Router:Router) {

   if(localStorage.getItem('token')!==null){

     let myToken: any = localStorage.getItem('token');

    let decodedToken:any = jwtDecode(myToken);
   
    this.userName.next(decodedToken.name);

    this.isLogin.next(true);
    _Router.navigate(['/home']);

   }else{
    this.isLogin.next(false);
  }
  }

  // isLogin:boolean = false;

 
  signUp(user:LoginData):Observable<any>{
   return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', user)
  }

  signIn(user:User):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', user)
   }
 
  logOut(){
    localStorage.removeItem('token');
    this.isLogin.next(false);
    this.userName.next('');
    this._Router.navigate(['/login']);
  }


 
}
