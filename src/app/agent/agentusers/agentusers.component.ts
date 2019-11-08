import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agentusers',
  templateUrl: './agentusers.component.html',
  styleUrls: ['./agentusers.component.css']
})
export class AgentusersComponent implements OnInit {
  pandit_id: string;
  fname: any;
  agent_id: any;
  caturl: any = "http://192.168.1.55:3040/api/panditServices/getMyServices?pandit_id=";
  updateURL: string = "http://192.168.1.55:3040/api/panditServices/updatePanditService";
  result: any;
  result2: any;
  term: any;
  p: any;
  page = 10;
  loading:boolean = false;
  res;
  f:FormGroup;
  constructor(private location: Location, private activatedRoute: ActivatedRoute, private ht:HttpClient, private titleService: Title, private fb: FormBuilder, private toastr: ToastrService) {
    this.pandit_id = this.activatedRoute.snapshot.params.pandit_id;
    this.getPanditServices();
    this.fname = sessionStorage.getItem("fname");
    this.agent_id = sessionStorage.getItem("agent_id");
    const newTitle = "Pandit Services - " +this.pandit_id;
    this.titleService.setTitle(newTitle);
   }
  ngOnInit() {
    this.f = this.fb.group({
      'noofpandits': [null, Validators.required],
      'duration': [null, Validators.required],
      'cost': [null, Validators.required],
      'samagri': [null, Validators.required],
      'samagri_cost': [null, Validators.required],
      'pandit_service_id': [null, Validators.required]
    });
    
  }
  getPanditServices(){
    this.loading=true;
  this.ht.get(this.caturl+this.pandit_id).subscribe(resp => {
    this.result2 = resp;
      this.result = this.result2.data,
        this.loading = false
    });
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

  act(v) {
   
    this.ht.patch(this.updateURL, { "samagri": v.samagri, "cost": v.cost, "duration": v.duration, "pandit_service_id": v.pandit_service_id, "samagri_cost": v.samagri_cost, "noofpandits": v.noofpandits }).subscribe(resp => {
      this.result = resp;
      this.getPanditServices(),
      this.verifiedToaster()
    })
  }
  verifiedToaster() {
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

  back(){
    this.location.back()
  }

}
