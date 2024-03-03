import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { pathGuard } from './path.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'' , redirectTo:'/register' , pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'home' , component:HomeComponent, canActivate:[pathGuard]},
  {path:'cart' , component:CartComponent, canActivate:[pathGuard]},
  {path:'brand' , component:BrandsComponent, canActivate:[pathGuard]},
  {path:'productdetails/:productId/:productName' , component:ProductDetailsComponent, canActivate:[pathGuard]},
  {path:'categories' , component:CategoriesComponent ,canActivate:[pathGuard]},
  {path:'checkout/:cartId' , component:CheckoutComponent ,canActivate:[pathGuard]},
  {path:'wishlist' , component:WishlistComponent ,canActivate:[pathGuard]},
  {path:'settings', 
  loadChildren: () => 
       import('./settings/settings.module').then( (m) => m.SettingsModule)
},
  {path:'**' , component:NotfoundComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
