import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agentpandits',
  templateUrl: './agentpandits.component.html',
  styleUrls: ['./agentpandits.component.css']
})
export class AgentpanditsComponent implements OnInit {
  loading = true;
  termsearch2: any;
  termsearch1: any;
  termsearch3: any;

  p: any;
  fname = localStorage.getItem("fname");
  agent_id = localStorage.getItem("agent_id");
  page = 10;

  ngOnInit(): void { }
  truePandit: any = 1;
  falsePandit: any = 0;
  caturl: any = "http://192.168.1.55:3040/api/pandit/getAllPandits";
  verifyPanditURL: any = "http://115.112.122.99:3040/api/pandit/approveReject";
  panditImageURL: any = "http://115.112.122.99:3040/api/images/";
  result: any;
  result2: any;


  constructor(private ht: HttpClient, private titleService: Title, private toastr: ToastrService) {

    const newTitle = this.fname.toUpperCase() + " " + this.agent_id + " - Pandits Registered";
    this.titleService.setTitle(newTitle);

    this.getAllPandits();
  }
  zoom: number = 8;

  getAllPandits() {
    this.ht.get(this.caturl).subscribe(resp => {
      this.result2 = resp;
      this.result = this.result2.data,
        this.loading = false,
        console.log(this.result)
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
    this.toastr.success('<font color=\"black\" size=\"4px\">Pandit Verified Successfully</font>', '', {
      closeButton: true,
      timeOut: 5000,
      progressBar: false,
      onActivateTick: true,
      tapToDismiss: true,
      enableHtml: true,
      easing: 'swing',
      easeTime: 500,
      titleClass: "success",
      progressAnimation: 'decreasing',
    });
  }

  rejectedToaster() {
    this.toastr.success('<font color=\"black\" size=\"4px\">Pandit Rejected Successfully</font>', '', {
      closeButton: true,
      timeOut: 5000,
      progressBar: false,
      onActivateTick: true,
      tapToDismiss: true,
      enableHtml: true,
      easing: 'swing',
      easeTime: 500,
      titleClass: "success",
      progressAnimation: 'decreasing',
    });
  }

}