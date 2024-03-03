import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategoriesComponent } from './categories/categories.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './slider/slider.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SalePipe } from './sale.pipe';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SpecificCategoryComponent } from './specific-category/specific-category.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    BrandsComponent,
    FooterComponent,
    NotfoundComponent,
    CategoriesComponent,
    SliderComponent,
    ProductDetailsComponent,
    RegisterComponent,
    LoginComponent,
    SalePipe,
    SearchPipe,
    CheckoutComponent,
    WishlistComponent,
    SpecificCategoryComponent,
    UserOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
