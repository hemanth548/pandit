import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Title } from '@angular/platform-browser';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-agentprofile',
  templateUrl: './agentprofile.component.html',
  styleUrls: ['./agentprofile.component.css']
})
export class AgentprofileComponent implements OnInit, OnDestroy  {

  addserviceurl: any = "http://192.168.1.55:3040/api/services/addservice";
  getAllServicesurl: any = "http://192.168.1.55:3040/api/services/getAllServices";
  deleteserviceurl: any = "http://192.168.1.55:3040/api/services/deleteservice";
  updateserviceurl: any = "http://192.168.1.55:3040/api/services/updateservice";
  getcategoryurl: any = "http://192.168.1.55:3040/api/services/getCategory ";
  term: any;

  submitted = false;
  f: FormGroup;
  formadd: FormGroup;
  result: any;
  res: any;
  k: any;
  loading = true;
  page: any = 5;


  p:any

  private ngUnsubscribe: Subject<any> = new Subject();
  samagriList: any;
  ngOnDestroy(): any {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  constructor(private ht: HttpClient, private fb: FormBuilder, private titleService: Title, private toastr: ToastrManager) {

    const fname = sessionStorage.getItem("fname");
    const agent_id = sessionStorage.getItem("agent_id");
    const newTitle = "Services of " + fname.toUpperCase() + " : " + agent_id;
    this.titleService.setTitle(newTitle);
  }


  ngOnInit() {

    this.getAllServices();
    this.getCategory();
    
    this.f = this.fb.group({
      samagri: [null, Validators.required],
      noofpandits: [null, [Validators.required, Validators.pattern("^[123456789][0-9]{0,5}$")]],
      duration: [null, [Validators.required, Validators.pattern("^[123456789][0-9]{0,5}$")]],
      cost: [null, [Validators.required, Validators.pattern("^[0123456789]{0,10}$")]],
      description: [null, Validators.required],
      category_id: [null, Validators.required],
      service_id: [null, Validators.required],



    });
    this.formadd = this.fb.group({
      samagri: [null, Validators.required],
      noofpandits: [null, [Validators.required, Validators.pattern("^[123456789][0-9]{0,2}$")]],
      duration: [null, [Validators.required, Validators.pattern("^[123456789][0-9]{0,2}$")]],
      cost: [null, [Validators.required, Validators.pattern("^[123456789][0-9]{0,50}$")]],
      description: [null, Validators.required],
      category_id: [null, Validators.required],


    });

  }
  getAllServices() {
    let res2: any;
    this.ht.get(this.getAllServicesurl)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(res => {
      res2 = res;
      this.res = res2.data;
      this.loading = false
    });
  }
  getCategory(){
    let result2: any;
    this.ht.get(this.getcategoryurl)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(res => 
      { result2 = res,
        this.result = result2.data
       });
  }
  funs(formdata) {
    this.k = formdata.service_id

    this.f.patchValue({
      'samagri': formdata.samagri,
      'cost': formdata.cost,
      'duration': formdata.duration,
      'service_id': formdata.service_id,
      'category_id': formdata.category_id,
      'noofpandits': formdata.noofpandits,
      'description': formdata.description
    })

  }
  samagriData(data){
    this.samagriList = data;
  }
  act(v) {
    this.submitted = true;
    if (this.formadd.invalid) {
      return;
    }
    else {
      this.formadd.reset();
      this.ht.post(this.addserviceurl, { "description": v.description, "samagri": v.samagri, "cost": v.cost, "duration": v.duration, "category_id": v.category_id, "noofpandits": v.noofpandits })
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(resp1 => {
        this.getAllServices(),
        this.addServicesToaster()
      });
      this.submitted = false;

    }
  }

  actup(v) {
    this.submitted = true;
    if (this.f.invalid) {
      return;
    }
    this.ht.patch(this.updateserviceurl, { "samagri": v.samagri, "cost": v.cost, "duration": v.duration, "service_id": v.service_id, "category_id": v.category_id, "noofpandits": v.noofpandits }).subscribe(resp1 => {
      this.getAllServices(),
      this.changesToaster()
    })
    this.submitted = false;
  }
  del(data) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      customClass:'swal-height'
    }).then((result) => {
      if (result.value) {
          this.ht.post(this.deleteserviceurl, { "service_id": data.service_id })
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe(resp1 => {
            this.getAllServices(),
              this.verifiedToaster()
          })
      }
    })

    }
  downloadpdf() {
    const doc = new jsPDF('l',"mm","a2");
    doc.autoTable({ html: '#my-table'});
    doc.save('service.pdf');

  }
  rest() {
    this.submitted = false;
    this.formadd.reset();
  }
  addServicesToaster() {
    this.toastr.successToastr("<span style='font-size:16px;'>Add service success</span>", "Success !", {enableHTML: true, animate:'slideFromRight'});
  }

  changesToaster() {
    this.toastr.successToastr("<span style='font-size:16px;'>Saved Successfully</span>", "Success !", {enableHTML: true, animate:'slideFromRight'});
  }
  
  verifiedToaster() {
    this.toastr.warningToastr("<span style='font-size:16px;'>Deleted Successfully</span>", "Alert !", {enableHTML: true, animate:'slideFromRight'});
  }

}
