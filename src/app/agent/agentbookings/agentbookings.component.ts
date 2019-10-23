import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-agentbookings',
  templateUrl: './agentbookings.component.html',
  styleUrls: ['./agentbookings.component.css']
})
export class AgentbookingsComponent implements OnInit {
  fname = localStorage.getItem("fname");
  agent_id = localStorage.getItem("agent_id");
  roll = localStorage.getItem("role");
  newTitle = "Bookings of " + this.fname.toUpperCase() + " as " + this.roll + " : " + this.agent_id;
  loading = true;
  result2;
  term: any;
  p: any;
  length: any;
  page = 10;
  url: any = "http://192.168.1.55:3040/api/booking/getAllBookings";
  result: any;
  date;
  constructor(private ht: HttpClient, private authService: AuthService, private routerNavigate: Router, private titleService: Title) {
    this.titleService.setTitle(this.newTitle);
    document.cookie = this.titleService + '=' + this.newTitle;
    this.ht.get(this.url).subscribe(resp => {
      console.log(resp),
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
}
