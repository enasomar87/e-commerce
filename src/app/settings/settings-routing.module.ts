import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  {path:'', redirectTo:'forget', pathMatch:'full'},
  {path:'forget', component:ForgetpasswordComponent},
  {path:'reset', component:ResetpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
