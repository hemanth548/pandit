import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { PlatformLocation } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { MatTabChangeEvent } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { HttpResponse } from '@angular/common/http';
declare var require: any
declare var $: any;
var capsLock = require("capslock");


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})

export class LoginComponent implements OnInit {

  loading = false;
  val = false;
  valf: boolean = true;
  val2: boolean = false;
  caps: any;
  TrafficLoginForm: FormGroup;
  PurohitRegisterForm: FormGroup;
  ff: FormGroup;
  f: FormGroup;
  submitted = false;
  submitstatus = false;
  res: any;

  constructor(private toastr: ToastrService, private fb: FormBuilder, private authService: AuthService, private routerNavigate: Router, public dialog: MatDialog, private _snackBar: MatSnackBar, private location: PlatformLocation, private titleService: Title) {
    
    const newTitle = "Purohit - Web Platform for Puja and Poojari Bookings";
    this.titleService.setTitle(newTitle);

    capsLock.observe(function (status) {

      this.caps = status;
      if (this.caps == true) {
        window.alert("Warning! Caps Lock is ON");
      }
    });


    $(window).on('load', function () {
      setTimeout(function () {
        $('#adModal').modal();
      }, 4000);
    });
  }

  roll
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
          localStorage.setItem("purohitmobile", this.res.data.mobile);
          localStorage.setItem("purohitpandit_id", this.res.data.pandit_id);
          localStorage.setItem("purohitfname", this.res.data.fname);
          localStorage.setItem("purohitlname", this.res.data.lname);
          localStorage.setItem("purohitemail", this.res.data.email);
          localStorage.setItem("purohittoken", this.res.token);
          localStorage.setItem("purohitotp", this.res.data.otp);
          localStorage.setItem("panditIdProof",this.res.data.idproofurl);
          localStorage.setItem("p-role","Purohit");
          console.log(this.res)
          if (this.res.token) {
            this.routerNavigate.navigate(['purohithome',this.res.data.pandit_id]);
          }
          this.loading = false;

        },
        (err: HttpResponse<any>) => {
          if (err.status == 400)
            Swal.fire({
              title: 'Wrong Credentials',
              type: 'warning',
              timer: 2000,
              customClass: 'swal-height',
              showConfirmButton: false,
            })
          else
            Swal.fire({
              title: 'Error logging to Purohit',
              type: 'warning',
              timer: 2000,
              customClass: 'swal-height',
              showConfirmButton: false,
            });
          this.loading = false;
        }
      )
    }
    if (this.roll == 'Yajman') {
      this.authService.yajmanloginAction(formData).subscribe(
        (res: HttpResponse<any>) => {

          Swal.fire({
            title: 'login Successful ',
            type: 'success',
            timer: 2000,
            customClass: 'swal-height',
            showConfirmButton: false,
          })
          localStorage.setItem("mobile", formData.mobile);
          localStorage.setItem("password", formData.password);
          localStorage.setItem("fname", formData.fname);
          localStorage.setItem("lname", formData.lname);
          localStorage.setItem("email", formData.email);
          localStorage.setItem("Y-role","Yajman");

          this.routerNavigate.navigate(['yajmandashboard']);
        },
        (err: HttpResponse<any>) => {
          if (err.status == 400)
            Swal.fire({
              title: 'Wrong Credentials',
              type: 'warning',
              timer: 2000,
              customClass: 'swal-height',
              showConfirmButton: false,
            })
          else
            Swal.fire({
              title: 'Error logging to Yajman',
              type: 'warning',
              timer: 2000,
              customClass: 'swal-height',
              showConfirmButton: false,
            });
          this.loading = false;

        }

      );
    }
    if (this.roll == 'Agent') {

      this.authService.agentloginActions(formData).subscribe(res => {

        this.res = res;
        localStorage.setItem("mobile", this.res.data.mobile);
        localStorage.setItem("password", this.res.data.password);
        localStorage.setItem("fname", this.res.data.fname);
        localStorage.setItem("lname", this.res.data.lname);
        localStorage.setItem("email", this.res.data.email);
        localStorage.setItem("agent_id", this.res.data.agent_id);
        localStorage.setItem("A-role","Agent");
        localStorage.setItem("token", this.res.token);
        console.log(this.res)
        if (this.res.token) {
          this.routerNavigate.navigate(['agentdashboard', this.res.data.agent_id]);
        }
        this.loading = false;
      },
        err => {
          if (err.status == 400)
            Swal.fire({
              title: 'Wrong Credentials',
              type: 'warning',
              timer: 2000,
              customClass: 'swal-height',
              showConfirmButton: false,
            })
          else
            Swal.fire({
              title: 'Error logging to Agent',
              type: 'warning',
              timer: 2000,
              customClass: 'swal-height',
              showConfirmButton: false,
            });
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
            Swal.fire({
              title: 'Registration Successful ' + formData.fname + "\n Please Login as Purohit",
              type: 'success',
              timer: 2000,
              customClass: 'swal-height',
              showConfirmButton: false
            })

          },
          (err: HttpResponse<any>) => {
            Swal.fire({
              title: '<span style="color:red;font-size:20px;">Registration UnSuccessful ' + formData.fname + "\n already registered user</span>",
              type: 'warning',
              timer: 2000,
              customClass: 'swal-height',
              showConfirmButton: false
            })

          }

        );
        this.loading = false;
      }
      if (this.roll == 'Yajman') {
        (await this.authService.yajmanRegisterAction(formData)).subscribe(
          (res: HttpResponse<any>) => {
            this.loading = false;
            Swal.fire({
              title: 'Registration Successful ' + formData.fname + "\n Please Login for Yajman",
              type: 'success',
              timer: 2000,
              confirmButtonText: 'OK'
            })

          },
          (err: HttpResponse<any>) => {
            this.loading = false;
            Swal.fire({
              title: '<span style="color:red;font-size:20px;">Registration UnSuccessful ' + formData.fname + "</span>",
              type: 'warning',
              timer: 2000,
              customClass: 'swal-height',
              showConfirmButton: false
            })

          }
        );
      }
      if (this.roll == 'Agent') {
        (await this.authService.agentregisterAction(formData)).subscribe(
          (res: HttpResponse<any>) => {
            Swal.fire({
              title: 'Registration Successful ' + formData.fname + "\n Please Login as Agent",
              type: 'success',
              timer: 2000,
              customClass: 'swal-height',
              showConfirmButton: false
            })

          },
          (err: HttpResponse<any>) => {
            Swal.fire({
              title: '<span style="color:red;font-size:20px;"><p>Note: City is Mandatory</p></span>\n',
              type: 'warning',
              timer: 3000,
              customClass: 'swal-height2',
              showConfirmButton: false
            })

          }


        );
        this.loading = false;
      }
    }
  }
  ngOnInit() {


    this.TrafficLoginForm = this.fb.group({
      mobile: [null, [Validators.pattern("[0-9]{10}$"), Validators.required]],
      password: [null, Validators.required],
      gender: [null, Validators.required],

    })
    this.PurohitRegisterForm = this.fb.group({
      fname: [null, [Validators.required, Validators.pattern("^[A-Za-z]{3,15}$")]],
      lname: [null, [Validators.required, Validators.pattern("^[A-Za-z]{3,15}$")]],
      mobile: [null, [Validators.required, Validators.pattern("[6789][0-9]{9}$")]],
      email: [null, [Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"), Validators.required]],
      gender: ['Yajman'],
      city: [null]
    });
    this.ff = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern("[6789][0-9]{9}$")]],
    })
    this.f = this.fb.group({
      ot: [null, [Validators.required, Validators.pattern("[0-9]{6}$")]],
    })
   
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
    Swal.fire({
      title: 'OTP sent Successfully \n' + s.mobile,
      type: 'success',
      timer: 2500,
      showConfirmButton: false,
    });
    this.val2 = true;
  }
  otp(s) {
    this.submitted = true;
    if (this.f.invalid) {
      return;
    }
    if (this.f.valid) {
      this.submitted = false;
    }
    Swal.fire({
      title: 'Reset Successful',
      type: 'success',
      timer: 2500,
      showConfirmButton: false,
    })
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
    this.toastr.success('<font color=\"black\" size=\"4px\">OTP Sent Successfully</font>', '', {
      closeButton: true,
      timeOut: 5000,
      progressBar: true,
      onActivateTick: true,
      tapToDismiss: true,
      enableHtml: true,
      easing: 'ease-in-out',
      easeTime: 600
    });
  }
  onLinkClick(event: MatTabChangeEvent) {
    this.submitted = false;
  }

}

