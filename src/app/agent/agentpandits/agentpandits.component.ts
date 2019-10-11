import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MouseEvent } from '@agm/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-agentpandits',
  templateUrl: './agentpandits.component.html',
  styleUrls: ['./agentpandits.component.css']
})
export class AgentpanditsComponent implements OnInit {
  loading=true;
  term:any;
  p:any;
  fname=localStorage.getItem("fname");
  agent_id=localStorage.getItem("agent_id");
  page=3;


  ngOnInit(): void {

  }

caturl:any="http://192.168.1.55:3040/api/pandit/getAllPandits";
result:any;
result2:any;


  constructor(private ht:HttpClient, private titleService: Title) { 

    const newTitle=this.fname.toUpperCase( )+" "+this.agent_id+" - Pandits Registered";

    this.titleService.setTitle( newTitle );

    this.ht.get(this.caturl).subscribe(resp=>{this.result2=resp;
      this.result=this.result2.data,
      this.loading=false})}
    zoom: number = 8;

   
        
downloadpdf() {
  const doc = new jsPDF();
  doc.autoTable({html: '#my-table',theme:'striped'});
  doc.save('Pandits.pdf');

  }
}