import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; 
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-agentusers',
  templateUrl: './agentusers.component.html',
  styleUrls: ['./agentusers.component.css']
})
export class AgentusersComponent implements OnInit {
  pandit_id: any;
  fname: any;
  agent_id: any;

  result: any;
  result2: any;

  term1: any;
  term2: any;

  res: any;
  f:FormGroup;
  moreDetails:boolean;

  result3: any;
  getresult: any;
  bookingres1: any;
  bookingdata: any;
  categoryres1: any;
  categorydata: any;
  matTabChangeValue: boolean;
  p: any;
  p2: any;
  loading: any;
  constructor(private location: Location, private activatedRoute: ActivatedRoute, private titleService: Title, private fb: FormBuilder, private toastr: ToastrService, private service: AuthService) {
    this.pandit_id = this.activatedRoute.snapshot.params.pandit_id;
    const newTitle = "Pandit Profile - " + this.pandit_id;
    this.titleService.setTitle(newTitle);
    this.loading = true;
    this.getPanditServices(this.pandit_id);
    this.getPanditDetails(this.pandit_id);
   }
  ngOnInit() {
   
    this.moreDetails = false;
    this.f = this.fb.group({
      'noofpandits': [null, Validators.required],
      'duration': [null, Validators.required],
      'cost': [null, Validators.required],
      'samagri': [null, Validators.required],
      'samagri_cost': [null, Validators.required],
      'pandit_service_id': [null, Validators.required]
    });
    
  }


  downloadpdf() {
    const doc = new jsPDF('l',"mm","a2");
    doc.autoTable({ html: '#my-table', theme: 'striped' });
    doc.save('Pandit-Bookings.pdf');
  }

  moredetailsfun(){
    if( this.moreDetails == true)
      this.moreDetails = false;
    else
      this.moreDetails = true;
  }
  back(){
    this.location.back()
  }
  funs(formdata) {
    this.f.patchValue({
      'cost': formdata.cost,
      'duration': formdata.duration,
      'samagri_cost': formdata.samagri_cost,
      'noofpandits': formdata.noofpandits,
      'samagri': formdata.samagri,
      'pandit_service_id': formdata.pandit_service_id
    })

  }
  

  getPanditServices(pandit_id:any){
  this.service.getPanditServices(pandit_id).subscribe(resp => {
    this.result2 = resp,
      this.result = this.result2.data
    },
    err=>{
      this.dangerToaster2()
    })
  }

  getPanditDetails(pandit_id) {
    this.service.getPanditDetails(pandit_id).subscribe(resp => {
        this.result3 = resp;
        this.getresult = this.result3.data
      },
      err=>{
        this.dangerToaster2()
        })
        this.loading = false;
    }

  act(v) {
   this.loading = true;
    this.service.act(v).subscribe(resp => {
      this.getPanditServices(this.pandit_id),
      this.verifiedToaster()
    },
    err=>{
      this.dangerToaster()
    })
  }

  onLinkClick(){
    if(this.matTabChangeValue)
      return;
    this.getPanditBookings(this.pandit_id);
  }

  getPanditBookings(pandit_id){
    this.loading = true;
    this.service.getPanditBookings(pandit_id).subscribe(resp => {
      this.bookingres1 = resp,
      this.bookingdata = this.bookingres1.data,
      this.matTabChangeValue = true
    },
    err=>{
      this.dangerToaster2()
    })
    this.loading = false;
  }
  verifiedToaster() {
    this.loading = false;
    this.toastr.success('<font color=\"black\" size=\"4px\"> Saved Successfully</font>', '', {
      closeButton: true,
      timeOut: 4000,
      progressBar: false,
      onActivateTick: true,
      tapToDismiss: true,
      enableHtml: true,
      easing: 'ease-in',
      easeTime: 100,
      titleClass: "success",
      progressAnimation: 'decreasing',
    });
  }
  dangerToaster() {
    this.loading = false;
    this.toastr.error('<font color=\"black\" size=\"4px\"> Failed to save data</font>', '', {
      closeButton: true,
      timeOut: 4000,
      progressBar: false,
      onActivateTick: true,
      tapToDismiss: true,
      enableHtml: true,
      easing: 'ease-in',
      easeTime: 100,
      titleClass: "success",
      progressAnimation: 'decreasing',
    });
  }
  dangerToaster2() {
    this.loading = false;
    this.toastr.error('<font color=\"black\" size=\"4px\"> Failed to get data from server</font>', '', {
      closeButton: true,
      timeOut: 4000,
      progressBar: false,
      onActivateTick: true,
      tapToDismiss: true,
      enableHtml: true,
      easing: 'ease-in',
      easeTime: 100,
      titleClass: "success",
      progressAnimation: 'decreasing',
    });
  }
}
