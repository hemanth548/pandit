import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-agentbookings',
  templateUrl: './agentbookings.component.html',
  styleUrls: ['./agentbookings.component.css']
})
export class AgentbookingsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();

  fname = sessionStorage.getItem("fname");
  agent_id = sessionStorage.getItem("agent_id");
  newTitle = "Bookings of " + this.fname.toUpperCase() + " - " + this.agent_id;
  loading = true;
  result2;
  term: any;
  p: any;
  length: any;
  url: any = "http://192.168.1.55:3040/api/booking/getAllBookings";
  result: any;
  date;
  constructor(private ht: HttpClient, private authService: AuthService, private routerNavigate: Router, private titleService: Title) {
    this.titleService.setTitle(this.newTitle);
    document.cookie = this.titleService + '=' + this.newTitle;
    this.ht.get(this.url)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(resp => {
      this.result2 = resp, this.result = this.result2.data; length = this.result2.data.length; this.loading = false
    })
  }
  ngOnInit() {
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
