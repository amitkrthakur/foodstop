import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
//import { BrowseComponent } from './browse/browse.component'

@Injectable({
  providedIn: 'root',
})

export class HttpService {

  userId: string = 'user@test.com';

  //Default Location
  latitude: Number = 19.0166239;
  longitude: Number = 72.8930751;

  //Default City
  city_id: Number = 1;

  // latitude: Number = this.geo.latitude;
  // longitude: Number = this.geo.longitude;

  scheme: string = 'http';
  host: string = 'localhost/backend';

  //Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  zomatoHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'user-key': '3c99a91c83aaebabc4ee9ca71bf6dba4'
    })
  };

  //Login Flow Urls__________________________________________________
  signupUrl: string = this.scheme + '://' + this.host + '/api/login/signup';
  loginUrl: string = this.scheme + '://' + this.host + '/api/login/login';
  resetpwdUrl: string = this.scheme + '://' + this.host + '/api/resetpwd';
  forgotpwdUrl: string = this.scheme + '://' + this.host + '/api/forgotpwd';

  //Zomato API Urls
  zomatoUrl = "https://developers.zomato.com/api/v2.1/";

  constructor(private http: HttpClient) { }

  //Login
  initiateSignup(data): Observable<Object> {
    return this.http.post(this.signupUrl, data, this.httpOptions);
  }

  loginUser(data: any): Observable<Object> {
    return this.http.post(this.loginUrl, data, this.httpOptions);
  }

  initiatePwdReset(email: string): Observable<Object> {
    return this.http.get(this.forgotpwdUrl + '?email=' + email);
  }

  resetPwd(data: any): Observable<Object> {
    return this.http.post(this.resetpwdUrl, data, this.httpOptions);
  }


  //Zomato Api
  getCities(): Observable<Object> {
    return this.http.get(this.zomatoUrl + 'cities' + '?lat=' + this.longitude + '&lon=' + this.longitude + '&q=' + 'New Delhi, India', this.zomatoHeaders);
  }

  getCollections(): Observable<Object> {
    return this.http.get(this.zomatoUrl + 'collections' + '?lat=' + this.longitude + '&lon=' + this.longitude + '&city_id=' + '1', this.zomatoHeaders);
  }

  getCuisines(): Observable<Object> {
    return this.http.get(this.zomatoUrl + 'cuisines' + '?lat=' + this.latitude + '&lon=' + this.longitude, this.zomatoHeaders);
  }

  nearbyRestaurants() {
    return this.http.get(this.zomatoUrl + 'geocode' + '?lat=' + this.latitude + '&lon=' + this.longitude, this.zomatoHeaders);
  }

  searchCuisines(cus_id: Number): Observable<Object> {
    return this.http.get(this.zomatoUrl + 'search' + '?lat=' + this.latitude + '&lon=' + this.longitude + '&id' + cus_id, this.zomatoHeaders);
  }

  searchRestaurant(res_id: Number): Observable<Object> {
    return this.http.get(this.zomatoUrl + 'search' + '?lat=' + this.latitude + '&lon=' + this.longitude + '&id' + res_id, this.zomatoHeaders);
  }

}
