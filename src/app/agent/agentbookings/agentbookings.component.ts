import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MouseEvent } from '@agm/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ɵparseCookieValue } from '@angular/common';
@Component({
  selector: 'app-agentbookings',
  templateUrl: './agentbookings.component.html',
  styleUrls: ['./agentbookings.component.css']
})
export class AgentbookingsComponent implements OnInit {
  fname=localStorage.getItem("fname");
  agent_id=localStorage.getItem("agent_id");
  roll=localStorage.getItem("role");
  newTitle="Bookings of "+this.fname.toUpperCase( )+" as "+this.roll+" : "+this.agent_id;
  loading=true;
  result2;
  term:any;
  p:any;
  length:any;
  page=3;
  url:any="http://192.168.1.55:3040/api/booking/getAllBookings";
  result:any;
  date;
    constructor(private ht:HttpClient,private authService: AuthService, private routerNavigate: Router, private titleService: Title) {
        this.titleService.setTitle( this.newTitle );
      document.cookie=this.titleService+'='+this.newTitle;
      this.ht.get(this.url).subscribe(resp=>{console.log(resp),
        this.result2=resp,this.result=this.result2.data;length=this.result2.data.length ;this.loading=false})
        // localStorage.setItem('bookingCount',this.length);
      }
  ngOnInit() {
  }
  lat: number = 51.673858;
  lng: number = 7.815982;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ]


downloadpdf(){
  const doc = new jsPDF();
  doc.autoTable({html: '#my-table',theme:'striped'});
  doc.save('Bookings.pdf');

}
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

