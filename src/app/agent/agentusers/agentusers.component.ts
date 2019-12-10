import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Location } from '@angular/common';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; 
import { AuthService } from 'src/app/services/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-agentusers',
  templateUrl: './agentusers.component.html',
  styleUrls: ['./agentusers.component.css']
})
export class AgentusersComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();
  samagriList: any;
  page: any = 5;
  ngOnDestroy(): any {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}
  pandit_id: any;

  result: any;

  term1: any;
  term2: any;

  res: any;
  f:FormGroup;
  moreDetails:boolean;

  getresult: any;
  bookingdata: any;
  matTabChangeValue: boolean = true;
  p: any;
  p2: any;
  loading: boolean;
  verifyPanditURL: any = "http://115.112.122.99:3040/api/pandit/approveReject";
  selectedIndex: any;
  Servicelength: boolean;
  Bookinglength: boolean;

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private titleService: Title, private fb: FormBuilder, private toastr: ToastrManager, private service: AuthService,private ht: HttpClient) {
    this.pandit_id = this.activatedRoute.snapshot.params.pandit_id;
    const newTitle = "Pandit Profile - " + this.pandit_id;
    this.titleService.setTitle(newTitle);
    this.getPanditServices(this.pandit_id);
    this.getPanditDetails(this.pandit_id);
    this.Servicelength = false;
    this.Bookinglength = false;

   }
  ngOnInit() {
    this.moreDetails = false;
    this.f = this.fb.group({
      'noofpandits': [null, [Validators.required, Validators.pattern("^[123456789][0-9]{0,5}$")]],
      'duration': [null, [Validators.required, Validators.pattern("^[123456789][0-9]{0,5}$")]],
      'cost': [null, [Validators.required, Validators.pattern("^[0123456789]{0,10}$")]],
      'samagri': [null, Validators.required],
      'samagri_cost': [null, [Validators.required, Validators.pattern("^[0123456789]{0,10}$")]],
      'pandit_service_id': [null, Validators.required]
    });
    
  }
  verifyPandit(pandit_id: any, isVerified: any) {
    this.loading = true,
    pandit_id = this.pandit_id,
    isVerified = 1,
    this.ht.patch(this.verifyPanditURL, { isVerified, pandit_id }).subscribe(respToVerify => {
      this.getPanditDetails(pandit_id);
      this.verifiedToaster()
    })
  }
  rejectPandit(pandit_id: any, isVerified: any) {
    this.loading = true,
    pandit_id = this.pandit_id,
    isVerified = 0,
    this.ht.patch(this.verifyPanditURL, { isVerified, pandit_id }).subscribe(resp => {
      this.getPanditDetails(pandit_id);
      this.rejectedToaster()
    })
  }
  verifiedPanditToaster() {
    this.loading = false;
    this.toastr.successToastr("<span style='font-size:16px;'>Pandit Verified Successfully</span>", "Success !", {enableHTML: true, animate:'slideFromRight'});
  }

  rejectedToaster() {
    this.loading = false;
    this.toastr.successToastr("<span style='font-size:16px;'>Pandit Rejected Successfully</span>", "Success !", {enableHTML: true, animate:'slideFromRight'});
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
  samagriData(data){
    this.samagriList = data;
  }
  getPanditServices(pandit_id:any){
    this.loading = true;
    let result2: any;
    this.service.getPanditServices(pandit_id).subscribe(resp => {
    result2 = resp,this.result = result2.data
    if(this.result.length>0){
      this.Servicelength =true
    }
    this.loading = false;
    },
    err=>{
      this.loading = false,
      this.Servicelength =false;
      this.dangerToaster2() 
    })
  }
  getPanditBookings(pandit_id){
    this.loading = true;
    let bookingres1: any;
    this.service.getPanditBookings(pandit_id).subscribe(resp => {
      bookingres1 = resp,this.bookingdata = bookingres1.data
      if(this.bookingdata.length>0){
        this.Bookinglength = true
      }
      this.loading = false;
    },
    err=>{
      this.loading = false,
      this.Bookinglength = false,
      this.dangerToaster2()   
    })
  }
  getPanditDetails(pandit_id) {
    this.loading = true;
    let result3: any;
    this.service.getPanditDetails(pandit_id).subscribe(resp => {
        result3 = resp;
        this.loading = false,
        this.getresult = result3.data     

      },
      err=>{
        this.loading = false,this.dangerToaster2()   

        })
    }

  act(v) {
   this.loading = true;
    this.service.act(v).subscribe(resp => {
      this.getPanditServices(this.pandit_id),
      this.verifiedToaster(),
      this.loading = false
    },
    err=>{
      this.loading = false, this.dangerToaster()    
    })
  }

  onLinkClick(){

    if(this.matTabChangeValue){
      this.getPanditBookings(this.pandit_id),
      this.matTabChangeValue = false,
      this.selectedIndex = 1
    }
    else{
      return;
    }
  }


  verifiedToaster() {
    this.toastr.successToastr("<span style='font-size:16px;'>Saved successfully</span>", "Success !", {enableHTML: true, animate:'slideFromRight'});
  }
  dangerToaster() {
    this.toastr.errorToastr("<span style='font-size:16px;'>Failed to save data</span>", "Oops !", {enableHTML: true, animate:'slideFromRight'});
  }
  dangerToaster2() {
    this.toastr.errorToastr("<span style='font-size:16px;'>Sorry! Failed to get data</span>", "Oops !", {enableHTML: true, animate:'slideFromRight'});
  }
}
