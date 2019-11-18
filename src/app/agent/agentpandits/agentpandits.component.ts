import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agentpandits',
  templateUrl: './agentpandits.component.html',
  styleUrls: ['./agentpandits.component.css']
})
export class AgentpanditsComponent implements OnInit {
  ngOnInit(): void { }
  constructor(private ht: HttpClient, private titleService: Title, private toastr: ToastrManager, private r: Router) {

    const newTitle = this.fname.toUpperCase() + " " + this.agent_id + " - Pandits Registered";
    this.titleService.setTitle(newTitle);

    this.getAllPandits();
  }
  loading = true;
  
  termsearch2: any;
  termsearch1: any;
  termsearch3: any;


  fname = sessionStorage.getItem("fname");
  agent_id = sessionStorage.getItem("agent_id");
  pandit_id: any;


  truePandit: any = 1;
  falsePandit: any = 0;
  caturl: any = "http://192.168.1.55:3040/api/pandit/getAllPandits";
  verifyPanditURL: any = "http://115.112.122.99:3040/api/pandit/approveReject";
  panditImageURL: any = "http://115.112.122.99:3040/api/images/";
  result: any;
  result2: any;
  p1: any;

  page1: number = 6;
  getAllPandits() {
    this.ht.get(this.caturl).subscribe(resp => {
      this.result2 = resp;
      this.result = this.result2.data,
        this.loading = false;
    })
  }
  verifyPandit(pandit_id: any, isVerified: any) {
    this.loading = true;
    isVerified = this.truePandit;
    this.ht.patch(this.verifyPanditURL, { isVerified, pandit_id }).subscribe(respToVerify => {
      this.getAllPandits(),
        this.verifiedToaster()
    })
  }
  rejectPandit(pandit_id: any, isVerified: any) {
    isVerified = this.falsePandit;
    this.ht.patch(this.verifyPanditURL, { isVerified, pandit_id }).subscribe(resp => {
      this.getAllPandits(),
        this.rejectedToaster()
    })
  }

  verifiedToaster() {
    this.toastr.successToastr("<span style='font-size:16px;'>Pandit Verified Successfully</span>", "Success !", {enableHTML: true, animate:'slideFromRight'});
  }

  rejectedToaster() {
    this.toastr.successToastr("<span style='font-size:16px;'>Pandit Rejected Successfully</span>", "Success !", {enableHTML: true, animate:'slideFromRight'});
  }
  navigatoToDetails(a){
    this.pandit_id = a.pandit_id
    this.r.navigate(["details", this.pandit_id])
  }

}