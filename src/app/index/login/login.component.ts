import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { MatTabChangeEvent } from '@angular/material';
import { HttpResponse } from '@angular/common/http';

declare var $: any;



@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})

export class LoginComponent implements OnInit {

  loading = false;
  val:boolean = false;
  valf: boolean = true;
  val2: boolean = false;
  show: boolean = false;
  PurohitLoginForm: FormGroup;
  PurohitRegisterForm: FormGroup;
  ff: FormGroup;
  f: FormGroup;
  submitted = false;
  submitstatus = false;
  res: any;
  roll: any;
  contactForm: FormGroup;

  constructor(private toastr: ToastrManager, private fb: FormBuilder, private authService: AuthService, private routerNavigate: Router) {

  }

  onChange(s) {
    this.roll = s.value;
    if (this.roll == "Agent") {
      this.val = true;
    }
    else
      this.val = false;
  }

  LoginAction(formData: any) {
    this.loading = true;
    if (this.roll == 'Purohit') {
      this.authService.purohitloginAction(formData).subscribe(
        res => {
          this.res = res;
          sessionStorage.setItem("purohitpandit_id", this.res.data.pandit_id);
          sessionStorage.setItem("purohitfname", this.res.data.fname);
          sessionStorage.setItem("purohitlname", this.res.data.lname);
          sessionStorage.setItem("purohittoken", this.res.token);
          if (this.res.token) {
            this.routerNavigate.navigate(['purohithome',this.res.data.pandit_id]);
          }
          this.loading = false;

        },
        (err: HttpResponse<any>) => {
          if (err.status == 400){
           this.toastr.errorToastr("<span style='font-size:16px;'>Invalid Credentials</span>", "Oops!", {enableHTML: true, animate:'slideFromRight'});
          }
          else{
           this.toastr.errorToastr("<span style='font-size:16px;'>Seems Something wrong, Please try again</span>", "Oops!", {enableHTML: true, animate:'slideFromRight'});
           } this.loading = false;
        }
      )
    }
    if (this.roll == 'Yajman') {
      this.authService.yajmanloginAction(formData).subscribe(
        (res: HttpResponse<any>) => {
          sessionStorage.setItem("fname", formData.fname);
          sessionStorage.setItem("lname", formData.lname);
          sessionStorage.setItem("yajmantoken", this.res.token);
          this.routerNavigate.navigate(['yajmandashboard']);
        },
        (err: HttpResponse<any>) => {
          if (err.status == 400)
          this.toastr.errorToastr("<span style='font-size:16px;'>Invalid Credentials</span>", "Oops!", {enableHTML: true, animate:'slideFromRight'});
          else
          this.toastr.errorToastr("<span style='font-size:16px;'>Seems Something wrong, Please try again</span>", "Oops!", {enableHTML: true, animate:'slideFromRight'});
          this.loading = false;

        }

      );
    }
    if (this.roll == 'Agent') {

      this.authService.agentloginActions(formData).subscribe(res => {
        this.res = res;
        sessionStorage.setItem("fname", this.res.data.fname);
        sessionStorage.setItem("lname", this.res.data.lname);
        sessionStorage.setItem("agent_id", this.res.data.agent_id);
        sessionStorage.setItem("token", this.res.token);
        if (this.res.token) {
          this.routerNavigate.navigate(['agentdashboard', this.res.data.fname, this.res.data.lname, this.res.data.agent_id]);
        }
        this.loading = false;
      },
        err => {
          if (err.status == 400)
          this.toastr.errorToastr("<span style='font-size:16px;'>Invalid Credentials</span>", "Oops!", {enableHTML: true, animate:'slideFromRight'});
          else
          this.toastr.errorToastr("<span style='font-size:16px;'>Seems Something wrong, Please try again</span>", "Oops!", {enableHTML: true, animate:'slideFromRight'});
          this.loading = false;
        }
      );
    }
  }

  async RegisterAction(formData: any) {
    this.loading = true;
    this.submitted = true;
    if (this.PurohitRegisterForm.invalid) {
      this.loading = false;
      return;
    }
    else {
      this.PurohitRegisterForm.reset();
      this.submitted = false;

      if (this.roll == 'Purohit') {
        (await this.authService.purohitregisterAction(formData)).subscribe(
          (res: HttpResponse<any>) => {
            this.toastr.successToastr("<span style='font-size:16px;'>Registration Successful</span>", "Success !", {enableHTML: true, animate:'slideFromRight'});
          },
          (err: HttpResponse<any>) => {
            if(err.status == 400){
              this.toastr.errorToastr("<span style='font-size:16px;'>Account exist already</span>", "Oops !", {enableHTML: true, animate:'slideFromRight'});
            }
            else
              this.toastr.errorToastr("<span style='font-size:16px;'>Registration Unsuccessful</span>", "Oops !", {enableHTML: true, animate:'slideFromRight'});
          }

        );
        this.loading = false;
      }
      if (this.roll == 'Yajman') {
        this.loading = true;
        (await this.authService.yajmanRegisterAction(formData)).subscribe(
          (res: HttpResponse<any>) => {
            this.toastr.successToastr("<span style='font-size:16px;'>Registration Successful</span>", "Success !", {enableHTML: true, animate:'slideFromRight'});
          },
          (err: HttpResponse<any>) => {
            if(err.status == 400){
              this.toastr.errorToastr("<span style='font-size:16px;'>Account exist already</span>", "Oops !", {enableHTML: true, animate:'slideFromRight'});
            }
            else
            this.toastr.errorToastr("<span style='font-size:16px;'>Registration Unsuccessful</span>", "Oops !", {enableHTML: true, animate:'slideFromRight'});
          }
        );
        this.loading = false;
      }
      if (this.roll == 'Agent') {
        this.loading = true;
        (await this.authService.agentregisterAction(formData)).subscribe(
          (res: HttpResponse<any>) => {
            this.toastr.successToastr("<span style='font-size:16px;'>Registration Successful</span>", "Success !", {enableHTML: true, animate:'slideFromRight'});
          },
          (err: HttpResponse<any>) => {
              if(err.status == 400){
                this.toastr.errorToastr("<span style='font-size:16px;'>Account exist already</span>", "Oops !", {enableHTML: true, animate:'slideFromRight'});
              }
              else
                this.toastr.errorToastr("<span style='font-size:16px;'>Registration Unsuccessful</span>", "Oops !", {enableHTML: true, animate:'slideFromRight'});
          });
        this.loading = false;
      }
    }
  }
  ngOnInit() {


    this.PurohitLoginForm = this.fb.group({
      mobile: [null, Validators.required],
      password: [null, Validators.required],
      gender: [null, Validators.required],

    })
    this.PurohitRegisterForm = this.fb.group({
      fname: [null, [Validators.required, Validators.pattern("^[A-Za-z]{1,25}$")]],
      lname: [null, [Validators.required, Validators.pattern("^[A-Za-z]{1,25}$")]],
      mobile: [null, [Validators.required, Validators.pattern("[0-9]{10}$")]],
      email: [null, [Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"), Validators.required]],
      gender: ['Yajman'],
      city: ["Hyderabad"]
    });
    this.ff = this.fb.group({
      mobile: [null, [Validators.required, Validators.pattern("[0-9]{10}$")]],
    })
    this.f = this.fb.group({
      ot: [null, [Validators.required, Validators.pattern("[0-9]{6}$")]],
    })
    this.contactForm = this.fb.group({
      contactFormName: [null, [Validators.required, Validators.pattern("^[A-Za-z]{1,25}$")]],
      contactFormMob: [null, [Validators.required, Validators.pattern("[0-9]{10}$")]],
      contactFormText: [null, Validators.required],


    })
   
  }
  forgotPassword(){
    if(this.show == true){
      if(this.val2 == false)
        this.show = false;
    }
    else{
      this.show = true;
    }
  }
  act(s) {
    this.submitted = true;
    if (this.ff.invalid) {
      return;
    }
    if (this.ff.valid) {
      this.submitted = false;
    }
    this.valf = false;
    this.ff.reset();
    this.toastr.successToastr("<span style='font-size:16px;'>OTP sent successfully</span>", "Success !", {enableHTML: true, animate:'slideFromRight'});

    this.val2 = true;
  }
  otp(s) {
    this.submitted = true;
    if (this.f.invalid) {
      return;
    }
    if (this.f.valid) {
      this.submitted = false;
      this.show = false;
      this.toastr.successToastr("<span style='font-size:16px;'>Password reset successfully</span>", "Success !", {enableHTML: true, animate:'slideFromRight'});
    }
    this.valf = true;
    this.val2 = false;
    this.f.reset();
  }
  handleEvent(e) {
    if (e.action == "done") {
      this.submitstatus = true;
    }
    if (e.action == "restart") {
      this.submitstatus = false;
    }
  }
  showToaster() {
    this.toastr.successToastr("<span style='font-size:16px;'>OTP sent successfully</span>", "Success !", {enableHTML: true, animate:'slideFromRight'});
  }
  onLinkClick(event: MatTabChangeEvent) {
    this.submitted = false;
  }
  onContactDetailsSubmit(formData){
    if(this.contactForm.invalid)
    {
      this.toastr.warningToastr("<span style='font-size:16px;'>please enter valid details</span>", "Warning !", {enableHTML: true, animate:'slideFromRight'});
      return;
    }
    this.toastr.successToastr("<span style='font-size:16px;'>sit back and relax, we'll reach you soon</span>", "Success !", {enableHTML: true, animate:'slideFromRight'});
  }
}
