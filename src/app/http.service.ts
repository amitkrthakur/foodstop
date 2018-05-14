import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class HttpService {

  signupUrl: string = "http://localhost/backend/signup";
  accountUrl: string = "http://localhost/backend/register";
  mobverifyUrl: string = "http://localhost/backend/mobverify";
  loginUrl: string = "http://localhost/backend/login";
  forgotpwdUrl: string = "http://localhost/backend/forgotpwd";
  resetpwdUrl: string = "http://localhost/backend/resetpwd";
  //=================
  userId: string = 'abc@cm.in';
  createGroupUrl: string = "http://localhost/backend/creategrp";
  createGroupContactUrl: string = "http://localhost/backend/creategrpcontact";
  createGroupContactNosUrl: string = "http://localhost/backend/creategrpcontactnos";
  getGroupDataUrl: string = "http://localhost/backend/groupdata";
  renameGroupUrl: string = "http://localhost/backend/renamegroup";
  //addGroupContactUrl:string="http://localhost/backend/addcontact";
  deleteGroupUrl: string = "http://localhost/backend/deletegroup";
  editgrpContactUrl: string = "http://localhost/backend/editcontact";
  deletegrpContactUrl: string = "http://localhost/backend/deletegrpcontact";
  senderidsUrl: string = "http://localhost/backend/senderids";
  campnsUrl: string = "http://localhost/backend/campns";
  templatesUrl: string = "http://localhost/backend/templates";
  draftsUrl: string = "http://localhost/backend/drafts";
  savedraftUrl: string = "http://localhost/backend/savedraft";
  transschmsgUrl: string = "http://localhost/backend/transschmsg";
  transsendmsgUrl: string = "http://localhost/backend/transsendmsg";
  promoschmsgUrl: string = "http://localhost/backend/promoschmsg";
  promosendmsgUrl: string = "http://localhost/backend/promosendmsg";
  uploadcontactsUrl: string = "http://localhost/backend/uploadcontacts"
  getreport7Url: string = "http://localhost/backend/report7";

  apikeysUrl: string = "http://localhost/backend/apikeys";
  saveapikeysUrl: string = "http://localhost/backend/saveapikey";
  disableapikeysUrl: string = "http://localhost/backend/disablekey";
  enableapikeysUrl: string = "http://localhost/backend/enablekey";
  webhooksUrl: string = "http://localhost/backend/savewhurl";
  ipsUrl: string = "http://localhost/backend/apiaccess";
  enableapisecUrl: string = "http://localhost/backend/enableapisec";
  disableapisecUrl: string = "http://localhost/backend/disableapisec";

  getCollectionsUrl:string = "https://developers.zomato.com/api/v2.1/collections"


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  zomatoHeads = {
    headers: new HttpHeaders({
      'user-key': '3c99a91c83aaebabc4ee9ca71bf6dba4'
    })
  };



  constructor(private http: HttpClient) { }


  getCollections(lat:Number, lon:Number): Observable<Object> {
    console.log("Requesting lat"+lat)
    return this.http.get(this.getCollectionsUrl + '?lat='+lat+'&lon='+lon,  this.zomatoHeads);
  }

  initiateSignup(email: string): Observable<Object> {
    return this.http.get(this.signupUrl + '?email='+email);
  }

  registerAccount(data: any): Observable<Object> {
    return this.http.post(this.accountUrl, data, this.httpOptions);
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
  createGroup(groupName: string): Observable<Object> {
    console.log("sending to server..." + this.userId + ":" + groupName);
    const data: any = { 'userId': this.userId, 'groupName': groupName };
    return this.http.post(this.createGroupUrl, data, this.httpOptions);
  }

  createGroupContact(groupName, contactMobile, contactName, contactEmail, sendContacts): Observable<Object> {
    console.log("sending to server..." + this.userId + ":" + groupName + ":" + contactMobile + ":" + contactName + ":" + contactEmail);
    const data: any = { 'userId': this.userId, 'groupName': groupName, 'contactNumber': contactMobile, 'contactName': contactName, 'contactEmail': contactEmail, 'sendContacts': sendContacts };
    return this.http.post(this.createGroupContactUrl, data, this.httpOptions);
  }

  createGroupContactNos(groupName, contactMobile): Observable<Object> {
    console.log("sending to server..." + this.userId + ":" + groupName + ":" + contactMobile);
    const data: any = { 'userId': this.userId, 'groupName': groupName, 'contactNumber': contactMobile };
    return this.http.post(this.createGroupContactNosUrl, data, this.httpOptions);
  }

  getGroupData(): Observable<Object> {
    return this.http.get(this.getGroupDataUrl + '?user=' + this.userId);
  }

  renameGroup(oldGroupName, newGroupName): Observable<Object> {
    console.log("sending to server..." + this.userId + ":" + oldGroupName + ":" + newGroupName);
    const data: any = { 'userId': this.userId, 'oldGroup': oldGroupName, 'groupName': newGroupName };
    return this.http.post(this.renameGroupUrl, data, this.httpOptions);
  }
  deleteGroup(groupName: string): Observable<Object> {
    console.log("sending to server..." + this.userId + ":" + groupName);
    const data: any = { 'userId': this.userId, 'oldGroup': groupName };
    return this.http.post(this.deleteGroupUrl, data, this.httpOptions);
  }
  editgrpContact(groupName: string, contactName: string, oldcontactNumber: number, contactNumber: number): Observable<Object> {
    console.log("sending to server..." + this.userId + ":" + groupName + ":" + contactName + ":" + oldcontactNumber + ":" + contactNumber);
    const data: any = { 'userId': this.userId, 'oldGroup': groupName, 'contactName': contactName, 'oldNumber': oldcontactNumber, 'contactNumber': contactNumber };
    return this.http.post(this.editgrpContactUrl, data, this.httpOptions);
  }
  deletegrpContact(groupName: string, contactNumber: number): Observable<Object> {
    console.log("sending to server..." + this.userId + ":" + groupName + ":" + contactNumber);
    const data: any = { 'userId': this.userId, 'oldGroup': groupName, 'contactNumber': contactNumber };
    return this.http.post(this.deletegrpContactUrl, data, this.httpOptions);
  }

  /*addGroupContact(groupName, contactMobile, contactName, contactEmail): Observable<Object>{
    console.log("sending to server..."+this.userId+":"+groupName+":"+contactMobile+":"+contactName+":"+contactEmail);
    const data: any = {'userId': this.userId, 'groupName': groupName,'contactNumber':contactMobile,'contactName':contactName,'contactEmail':contactEmail};
    return this.http.post(this.addGroupContactUrl,data,this.httpOptions);
  }*/

  getSenderids() {
    return this.http.get(this.senderidsUrl + '?user=' + this.userId);
  }
  getCampaigns() {
    return this.http.get(this.campnsUrl + '?user=' + this.userId);
  }
  getDrafts() {
    return this.http.get(this.draftsUrl + '?user=' + this.userId);
  }
  getTemplates() {
    return this.http.get(this.templatesUrl + '?user=' + this.userId);
  }
  saveDraft(draftName: string, msgBody: string) {
    console.log("sending to server..." + this.userId + ":" + draftName + ":" + msgBody);
    const data: any = { 'user': this.userId, 'name': draftName, 'msg': msgBody };
    console.log(data)
    return this.http.post(this.savedraftUrl, data, this.httpOptions);
  }
  transschMsg(data: any) {
    return this.http.post(this.transschmsgUrl, data, this.httpOptions);
  }
  transsendMsg(data: any) {
    return this.http.post(this.transsendmsgUrl, data, this.httpOptions);
  }
  promoschMsg(data: any) {
    return this.http.post(this.promoschmsgUrl, data, this.httpOptions);
  }
  promosendMsg(data: any) {
    return this.http.post(this.promosendmsgUrl, data, this.httpOptions);
  }
  uploadContacts(file) {
    const data: any = { 'user': this.userId, 'file': file }
    return this.http.post(this.uploadcontactsUrl, data, this.httpOptions);
  }
  getReports7(campn: string, client: string, route: number) {
    const data: any = { 'userId': this.userId, 'campn': campn, 'client': client, 'route': route }
    return this.http.post(this.getreport7Url, data, this.httpOptions);
  }
  getApiKeys(): Observable<Object> {
    console.log(this.userId);
    return this.http.get(this.apikeysUrl + '?user=' + this.userId);
  }

  saveApikeys(name: string) {
    return this.http.post(this.saveapikeysUrl + '?user=' + this.userId + '&name=' + name, this.httpOptions);
  }

  disableApikeys(name: string) {
    return this.http.post(this.disableapikeysUrl + '?user=' + this.userId + '&name=' + name, this.httpOptions);
  }

  enableApikeys(name: string) {
    return this.http.post(this.enableapikeysUrl + '?user=' + this.userId + '&name=' + name, this.httpOptions);
  }

  webHookUrl(whurl: string) {
    return this.http.post(this.webhooksUrl + '?user=' + this.userId + '&whurl=' + whurl, this.httpOptions);
  }

  getIps(): Observable<Object> {
    console.log(this.userId);
    return this.http.get(this.ipsUrl + '?user=' + this.userId);
  }

  enableSec(user: string) {
    return this.http.post(this.enableapisecUrl + '?user=' + this.userId, this.httpOptions);
  }

  disableSec(user: string) {
    return this.http.post(this.disableapisecUrl + '?user=' + this.userId, this.httpOptions);
  }
}
