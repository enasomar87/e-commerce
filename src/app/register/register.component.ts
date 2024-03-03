import { AuthnService } from './../authn.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


constructor(private _AuthnService:AuthnService,private _Router:Router){

}
apiResponse:string =''


loading:Boolean=false
  // userName = new FormControl('')
  // userEmail = new FormControl

registrationForm =new FormGroup({
  name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  email: new FormControl(null, [Validators.required, Validators.email]),
  password: new FormControl(null,[Validators.required, Validators.pattern(/^[a-z][A-Za-z0-9]{5,16}$/)]),
  rePassword: new FormControl( null, [Validators.required, Validators.pattern(/^[a-z][A-Za-z0-9]{5,16}$/)]),
  phone: new FormControl(null, [Validators.required, Validators.pattern(/[010|011|012|015][0-9]{8}$/)])
})

signUp(formData:any){

formData.markAllAsTouched();

  if(formData.valid && formData.get('password').value === formData.get('rePassword').value){

this.loading=true
    this._AuthnService.signUp(formData.value).subscribe(
      {
        next:(response)=>{console.log(response);
        this.apiResponse=response.message;
        this.loading =false

        if(this.apiResponse == 'success'){

          this._Router.navigate(['/login'])
        }
        
        },


          error:(err)=>{console.log(err);
            this.apiResponse= err.error.message;
            this.loading =false
          }
        }
    )
    }
    console.log(formData);
  }

  



}


