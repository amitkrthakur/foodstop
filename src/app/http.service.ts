import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class HttpService {

  signupUrl: string = "http://localhost:4000/api/users/signup";
  loginUrl: string = "http://localhost:4000/api/users/login";
  forgotpwdUrl: string = "http://localhost:4000/api/forgotpwd";
  resetpwdUrl: string = "http://localhost:4000/api/resetpwd";
  //=================
  userId: string = 'user@test.com';


  getCollectionsUrl: string = "https://developers.zomato.com/api/v2.1/collections"


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'user-key': '3c99a91c83aaebabc4ee9ca71bf6dba4'
    })
  };
  zomatoHeads = {
    headers: new HttpHeaders({
      'user-key': '3c99a91c83aaebabc4ee9ca71bf6dba4'
    })
  };



  constructor(private http: HttpClient) { }


  getCollections(lat: Number, lon: Number): Observable<Object> {
    console.log("Requesting lat" + lat)
    return this.http.get(this.getCollectionsUrl + '?lat=' + lat + '&lon=' + lon, this.httpOptions);
  }

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

  //======================Dashboard=========================//
}
