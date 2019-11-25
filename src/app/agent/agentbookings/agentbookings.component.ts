import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-agentbookings',
  templateUrl: './agentbookings.component.html',
  styleUrls: ['./agentbookings.component.css']
})
export class AgentbookingsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();

  loading = true;
  term: any;
  p: any;
  
  result: any;
  constructor(private ht: HttpClient, private authService: AuthService, private routerNavigate: Router, private titleService: Title) {
    let fname = sessionStorage.getItem("fname");
    let agent_id = sessionStorage.getItem("agent_id");
    let newTitle = "Bookings of " + fname.toUpperCase() + " - " + agent_id;
    this.titleService.setTitle(newTitle);
    let url: any = "http://192.168.1.55:3040/api/booking/getAllBookings";
    this.getBookings(url);

  }
  ngOnInit() {  }

  getBookings(url){
    
   let result2: any
    this.ht.get(url)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(resp => {
      result2 = resp, this.result = result2.data, this.loading = false
    })
  }
  downloadpdf() {
    const doc = new jsPDF('l',"mm","a2");
    doc.autoTable({ html: '#my-table', theme: 'striped' });
    doc.save('Bookings.pdf');

  }
    ngOnDestroy(): any {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
  }
}
