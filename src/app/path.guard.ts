import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthnService } from './authn.service';

export const pathGuard: CanActivateFn = (route, state) => {

let _authon = inject(AuthnService);

let _Router = inject(Router);

if(_authon.isLogin.value){
  return true;
}else{
  _Router.navigate(['/login'])
  return false;
}
  
};
