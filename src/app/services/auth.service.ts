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
  caturl: any = "http://192.168.1.55:3040/api/panditServices/getMyServices?pandit_id=";
  updateURL: string = "http://192.168.1.55:3040/api/panditServices/updatePanditService";
  panditDetailsURL: string = "http://192.168.1.55:3040/api/pandit/getProfileData?pandit_id=";
  panditBookingURL: string = "http://115.112.122.99:3040/api/booking/getPanditBookings?pandit_id=";
  categoryURL: string = "http://115.112.122.99:3040/api/services/servicesByCat?category_id=";
identity:any;
pandit_id:any
  public isAuthenticate(): boolean {
    const userData1 = sessionStorage.getItem('token');
    const userData2 = sessionStorage.getItem('purohittoken');

    if (userData1 || userData2) {
      return true;
    }
    else {
      return false;
    }
  }
  public getToken() {
    if(this.identity == "purohit"){

    }
    if(this.identity == "agent"){

    }
    if(this.identity == "yajman"){
    return sessionStorage.getItem('token');
    }
  }
  public purohitloginAction(postData) {
    this.identity = "purohit";
    var userObj = { mobile: postData.mobile, password: postData.password }
    return this.http.post(this.purohitloginurl, userObj);

  }

  public yajmanloginAction(postData) {
    this.identity = "yajman";
    var userObj = { mobile: postData.mobile, password: postData.password }

    return this.http.post(this.yajmanloginurl, userObj);

  }
  agentloginActions(postData) {
    this.identity = "agent";
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
    await sessionStorage.removeItem('token');
    await sessionStorage.clear();
    return true;
  }




  getPanditServices(pandit_id){
    this.pandit_id = pandit_id;
  return this.http.get(this.caturl+this.pandit_id);
  }
  act(v) { 
    return this.http.patch(this.updateURL, { "samagri": v.samagri, "cost": v.cost, "duration": v.duration, "pandit_service_id": v.pandit_service_id, "samagri_cost": v.samagri_cost, "noofpandits": v.noofpandits }) 
  }

  getPanditDetails(pandit_id):any {
    this.pandit_id = pandit_id;
    return this.http.get(this.panditDetailsURL + this.pandit_id);
  }

  getPanditBookings(pandit_id){
    this.pandit_id = pandit_id;
    return this.http.get(this.panditBookingURL+this.pandit_id);
  }
getCategories(catID){
    return this.http.get(this.categoryURL + catID);
}
}
// Authorization: `${this.auth.getToken()}`