import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agentprofile',
  templateUrl: './agentprofile.component.html',
  styleUrls: ['./agentprofile.component.css']
})
export class AgentprofileComponent implements OnInit {
  page = 10;

  addserviceurl: any = "http://192.168.1.55:3040/api/services/addservice";
  getAllServicesurl: any = "http://192.168.1.55:3040/api/services/getAllServices";
  deleteserviceurl: any = "http://192.168.1.55:3040/api/services/deleteservice";
  updateserviceurl: any = "http://192.168.1.55:3040/api/services/updateservice";
  getcategoryurl: any = "http://192.168.1.55:3040/api/services/getCategory ";
  term: any;
  p=3;

  submitted = false;
  f: FormGroup;
  formadd: FormGroup;
  result: any;
  result2: any;

  res: any;
  res2: any;
  k: any;
  loading = true;

  fname: any;
  agent_id: any;

  deleteConfirmStatus:boolean = false;
  count: number;

  constructor(private ht: HttpClient, private fb: FormBuilder, private titleService: Title, private toastr: ToastrService) {
    this.fname = localStorage.getItem("fname");
    this.agent_id = localStorage.getItem("agent_id");
    const newTitle = "Services of " + this.fname.toUpperCase() + " : " + this.agent_id;
    this.titleService.setTitle(newTitle);
  }


  ngOnInit() {

    this.getAllServices();
    this.getCategory();
    
    this.f = this.fb.group({
      samagri: [null, Validators.required],
      noofpandits: [null, [Validators.required, Validators.pattern("^[123456789][0-9]{0,2}$")]],
      duration: [null, [Validators.required, Validators.pattern("^[123456789][0-9]{0,2}$")]],
      cost: [null, [Validators.required, Validators.pattern("^[123456789][0-9]{0,50}$")]],
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
    this.ht.get(this.getAllServicesurl).subscribe(res => {
      this.res2 = res;
      this.res = this.res2.data;
      this.loading = false
    });
  }
  getCategory(){
    this.ht.get(this.getcategoryurl).subscribe(res => 
      { this.result2 = res,
        this.result = this.result2.data
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

  act(v) {
    this.submitted = true;
    if (this.formadd.invalid) {
      return;
    }
    else {
      this.formadd.reset();
      this.ht.post(this.addserviceurl, { "description": v.description, "samagri": v.samagri, "cost": v.cost, "duration": v.duration, "category_id": v.category_id, "noofpandits": v.noofpandits }).subscribe(resp1 => {
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
  del(p) {
    this.toastr.warning('<font color=\"black\" size=\"3px\">Click to Confirm Delete Service</font>', "", {
      closeButton: false,
      timeOut: 5000,
      progressBar: false,
      onActivateTick: true,
      // tapToDismiss: true,
      enableHtml: true,
      easing: 'ease-in',
      easeTime: 100,
      titleClass: "success",
      progressAnimation: 'decreasing',
    }).onTap.subscribe(() => {  
      this.ht.post(this.deleteserviceurl, { "service_id": p.service_id }).subscribe(resp1 => {
        this.getAllServices(),
          this.verifiedToaster()
      });
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
    this.toastr.success('<font color=\"black\" size=\"4px\">Add Service Success</font>', "", {
      closeButton: false,
      timeOut: 4000,
      progressBar: false,
      onActivateTick: true,
      tapToDismiss: true,
      enableHtml: true,
      easing: 'swing',
      easeTime: 100,
      titleClass: "success",
      progressAnimation: 'decreasing',
      
    });
  }

  changesToaster() {
    this.toastr.success('<font color=\"black\" size=\"4px\">Saved Successfully</font>', "", {
      closeButton: false,
      timeOut: 4000,
      progressBar: false,
      onActivateTick: true,
      tapToDismiss: true,
      enableHtml: true,
      easing: 'swing',
      easeTime: 100,
      titleClass: "success",
      progressAnimation: 'decreasing',
    });
  }
  
  verifiedToaster() {
    this.toastr.success('<font color=\"black\" size=\"4px\"> Deleted Successfully</font>', "", {
      closeButton: false,
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

  closeToaster() {
    this.toastr.warning('<font color=\"black\" size=\"4px\">No changes are done</font>', '', {
      closeButton: false,
      timeOut: 5000,
      progressBar: false,
      onActivateTick: true,
      tapToDismiss: true,
      enableHtml: true,
      easing: 'swing-in',
      easeTime: 100,
      titleClass: "success",
      progressAnimation: 'decreasing',
    });
  }
}
