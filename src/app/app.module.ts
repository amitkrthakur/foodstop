import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MnFullpageModule } from 'ngx-fullpage';
import { AgmCoreModule } from '@agm/core';

import { HttpService } from './http.service';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PwdresetComponent } from './pwdreset/pwdreset.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowseComponent } from './browse/browse.component';
import { LogoutComponent } from './logout/logout.component';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { CollectionComponent } from './collection/collection.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { DishesComponent } from './dishes/dishes.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { CuisineListComponent } from './cuisine-list/cuisine-list.component';
import { BrowseMoreCuisines } from './cuisines/cuisines.component';
import { RestaurantMap } from './restaurant/restaurant.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    PwdresetComponent,
    ForgotpwdComponent,
    WelcomeComponent,
    LandingPageComponent,
    BrowseComponent,
    LogoutComponent,
    CuisinesComponent,
    CollectionComponent,
    RestaurantComponent,
    MapComponent,
    AboutComponent,
    CartComponent,
    DishesComponent,
    ProfileComponent,
    AuthComponent,
    AdminComponent,
    CuisineListComponent,
    BrowseMoreCuisines,
    RestaurantMap,
    AddProductsComponent,
    OrdersComponent,
    AdminDashboardComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    MnFullpageModule.forRoot(),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBYh0EWNezQ5mSZuxaxuOZFgveJIx6CQG8'
    }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [BrowseMoreCuisines,RestaurantMap],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
