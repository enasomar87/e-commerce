import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthnService } from '../authn.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

constructor(private _AuthnService:AuthnService, private _Router:Router){

}

apiresponse:string ="";
loading:boolean = false;

loginForm = new FormGroup({
  
  email: new FormControl(null, [Validators.required, Validators.email]),
  password: new FormControl(null,[Validators.required, Validators.pattern(/^[a-z][A-Za-z0-9]{5,16}$/)]),

})

logIn(formData:any){

  if(formData.valid){

    this.loading= true

    this._AuthnService.signIn(formData.value).subscribe({
      next:(resp)=>{console.log(resp)

       this.apiresponse = resp.message

       this.loading =false;

       
      if(this.apiresponse =='success'){
        localStorage.setItem('token', resp.token);

       
        let decodedToken:any = jwtDecode(resp.token);
        console.log(decodedToken);
        this._AuthnService.userName.next(decodedToken.name);


        this._Router.navigate(['/home']);
        this._AuthnService.isLogin.next(true);
      }

      },


      error:(err)=>{console.log(err)

      this.apiresponse = err.error.message

      this.loading = false;

      
      },
      
    })
  }


console.log(formData);

}


}
