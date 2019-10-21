import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
declare  var $;
@Component({
  selector: 'app-purohitpassword',
  templateUrl: './purohitpassword.component.html',
  styleUrls: ['./purohitpassword.component.css']
})
export class PurohitpasswordComponent implements OnInit {

  
  addserviceurl: any = "http://192.168.1.55:3040/api/services/addservice";
  getAllServicesurl: any = "http://192.168.1.55:3040/api/services/getAllServices";
  deleteserviceurl: any = "http://192.168.1.55:3040/api/services/deleteservice";
  updateserviceurl: any = "http://192.168.1.55:3040/api/services/updateservice";
  getcategoryurl: any = "http://192.168.1.55:3040/api/services/getCategory ";
  term: any;
  p: any;

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

  constructor(private ht: HttpClient, private fb: FormBuilder, private titleService: Title) {
    this.fname = localStorage.getItem("fname");
    this.agent_id = localStorage.getItem("agent_id");
    const newTitle = "Services of " + this.fname + " : " + this.agent_id;
    this.titleService.setTitle(newTitle);
  }


  $(window).on('load', function () {
    setTimeout(function () {
      this.ht.get(this.getcategoryurl).subscribe(res => { console.log(res) });
    }, 4000);
  });
}



  ngOnInit() {
    this.ht.get(this.getAllServicesurl).subscribe(res => {
    this.res2 = res;
      this.res = this.res2.data;
      this.loading = false
    });
    this.ht.get(this.getcategoryurl).subscribe(res => { this.result2 = res, this.result = this.result2.data });

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
    console.log(v);
    if (this.formadd.invalid) {
      console.log("form is invalid")
      return;
    }
    else {
      this.formadd.reset();
      this.ht.post(this.addserviceurl, { "description": v.description, "samagri": v.samagri, "cost": v.cost, "duration": v.duration, "category_id": v.category_id, "noofpandits": v.noofpandits }).subscribe(resp1 => {
        this.ht.get(this.getAllServicesurl).subscribe(resp => { this.res2 = resp, this.res = this.res2.data })
      });
      this.submitted = false;

    }
  }


}
