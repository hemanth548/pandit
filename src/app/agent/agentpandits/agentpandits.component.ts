import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-agentpandits',
  templateUrl: './agentpandits.component.html',
  styleUrls: ['./agentpandits.component.css']
})
export class AgentpanditsComponent implements OnInit {
  
  ngOnInit(): void { }
  constructor(private ht: HttpClient, private titleService: Title, private toastr: ToastrManager, private r: Router) {
    const fname = sessionStorage.getItem("fname");
    const agent_id = sessionStorage.getItem("agent_id");
    const newTitle = fname.toUpperCase() + " " + agent_id + " - Pandits Registered";
    this.titleService.setTitle(newTitle);

    this.getAllPandits();
  }
  loading:boolean = true;
  
  termsearch2: any;
  termsearch1: any;
  termsearch3: any;

  private ngUnsubscribe: Subject<any> = new Subject();

  pandit_id: any;

  result: any;
  p1: any;

  getAllPandits() {
    let caturl: any = "http://192.168.1.55:3040/api/pandit/getAllPandits";
    let result2: any;

    this.ht.get(caturl)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(resp => {
      result2 = resp;
      this.result = result2.data,
        this.loading = false;
    })
  }

  navigatoToDetails(a){
    this.pandit_id = a.pandit_id
    this.r.navigate(["details", this.pandit_id])
  }
  ngOnDestroy(): any {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}
}