import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare var $: any;
@Injectable({
  providedIn: "root"
})
export class AuthService {

  responseData: any;
  multiple_roles: any;
  constructor(private http: HttpClient, private routerNavigate: Router) { }

  purohitloginurl: any = "http://192.168.1.55:3040/api/pandit/login";
  purohitRegisterurl: any = "http://192.168.1.55:3040/api/pandit/register";
  yajmanloginurl: any = "http://192.168.1.55:3040/api/yajman/login";
  yajmanRegisterurl: any = "http://192.168.1.55:3040/api/yajman/register";
  agentloginurl: any = "http://192.168.1.55:3040/api/agent/login";
  agentregisterurl: any = "http://192.168.1.55:3040/api/agent/register";

  public isAuthenticate(): boolean {
    const userData1 = localStorage.getItem('token');
    const userData2 = localStorage.getItem('purohittoken');


    if (userData1 || userData2) {
      return true;
    }
    else {
      return false;
    }
  }
  public getToken() {
    return localStorage.getItem('token');
  }
  public purohitloginAction(postData) {
    var userObj = { mobile: postData.mobile, password: postData.password }
    return this.http.post(this.purohitloginurl, userObj);

  }

  public yajmanloginAction(postData) {

    var userObj = { mobile: postData.mobile, password: postData.password }

    return this.http.post(this.yajmanloginurl, userObj);

  }
  agentloginActions(postData) {
    var userObj = { mobile: postData.mobile, password: postData.password }
    return this.http.post(this.agentloginurl, userObj);
  }

  public async purohitregisterAction(postData) {
    var userRegister = { fname: postData.fname, lname: postData.lname, mobile: postData.mobile, email: postData.email }

    return this.http.post(this.purohitRegisterurl, userRegister);

  }

  public async agentregisterAction(postData) {
    var agentregister = { fname: postData.fname, lname: postData.lname, email: postData.email, mobile: postData.mobile, city: postData.city }

    return this.http.post(this.agentregisterurl, agentregister);

  }


  public yajmanRegisterAction(postData) {
    var userRegister = { fname: postData.fname, lname: postData.lname, mobile: postData.mobile, email: postData.email }
    return this.http.post(this.yajmanRegisterurl, userRegister);
  }
  public async logOutAction() {
    await localStorage.removeItem('token');
    await localStorage.clear();
    return true;
  }
}