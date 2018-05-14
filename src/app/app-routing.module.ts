import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent, data: { state: 'welcome' } },
  { path: 'home', component: LandingPageComponent, data: { state: 'home' } },
  {
    path: 'auth', component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'admin', component: AdminComponent, data: { state: 'admin' } },
      { path: 'signup', component: SignupComponent, data: { state: 'signup' } },
      { path: 'login', component: LoginComponent, data: { state: 'login' } },
      { path: 'pwdreset/:code', component: PwdresetComponent, data: { state: 'pwdreset' } },
      { path: 'forgotpwd', component: ForgotpwdComponent, data: { state: 'forgotpwd' } },
      { path: 'logout', component: LogoutComponent, data: { state: 'logout' } },
    ]
  },

  {
    path: 'browse', component: BrowseComponent,
    children: [
      { path: '', redirectTo: 'cuisines', pathMatch: 'full' },
      { path: 'collections', component: CollectionComponent, data: { state: 'collection' } },
      { path: 'restaurants', component: RestaurantComponent, data: { state: 'colrestaurantslection' } },
      { path: 'map', component: MapComponent, data: { state: 'map' } },
      { path: 'about', component: AboutComponent, data: { state: 'about' } },
      { path: 'profile', component: ProfileComponent, data: { state: 'profile' } },
      { path: 'cart', component: CartComponent, data: { state: 'cart' } },
      {
        path: 'cuisines', component: CuisinesComponent,
        children: [
          { path: 'cuisine/:id', component: DishesComponent }
        ]
      },
    ]
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
