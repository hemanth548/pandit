import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder } from '@angular/forms';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-agentpanditservices',
  templateUrl: './agentpanditservices.component.html',
  styleUrls: ['./agentpanditservices.component.css']
})
export class AgentpanditservicesComponent implements OnInit {
  fname: any;
  agent_id: any;
  caturl: any = "http://192.168.1.55:3040/api/panditServices/getAllPanditsServices";
  result: any;
  result2: any;
  term: any;
  p: any;
  page = 3;

  res;
  loading = true;
  constructor(private ht: HttpClient, private fb: FormBuilder, private titleService: Title) {
    this.fname = localStorage.getItem("fname");
    this.agent_id = localStorage.getItem("agent_id");
    const newTitle = "Pandit Services of " + this.fname.toUpperCase() + " : " + this.agent_id;
    this.titleService.setTitle(newTitle);

    this.ht.get(this.caturl).subscribe(resp => {
    this.result2 = resp;
      this.result = this.result2.data,
        this.loading = false
    })
  }
  ngOnInit() {

  }
  downloadpdf() {
    const doc = new jsPDF();
    doc.autoTable({ html: '#my-table', theme: 'striped' });
    doc.save('pandit-service.pdf');

  }
  k: any;
  funs(formdata) {
    this.k = formdata.pandit_service_id

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
   
    this.ht.patch("http://192.168.1.55:3040/api/panditServices/updatePanditService", { "samagri": v.samagri, "cost": v.cost, "duration": v.duration, "pandit_service_id": v.pandit_service_id, "samagri_cost": v.samagri_cost, "noofpandits": v.noofpandits }).subscribe(resp => {
      this.result = resp;
      this.ht.get(this.caturl).subscribe(resp => { this.result2 = resp, this.result = this.result2.data })
    })
  }

  f = this.fb.group({
    'noofpandits': [null, Validators.required],
    'duration': [null, Validators.required],
    'cost': [null, Validators.required],
    'samagri': [null, Validators.required],
    'samagri_cost': [null, Validators.required],
    'pandit_service_id': [null, Validators.required]
  });

}
