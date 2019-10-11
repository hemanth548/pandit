import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-agentcategories',
  templateUrl: './agentcategories.component.html',
  styleUrls: ['./agentcategories.component.css']
})
export class AgentcategoriesComponent implements OnInit {
url:any="http://192.168.1.55:3040/api/services/getCategory ";
resultt:any;
resultt2:any;
term:any;
page=3;
p:any;

loading=true;
  constructor(private ht:HttpClient, private titleService:Title) {
    const newTitle="Pooja Categories"
    this.titleService.setTitle( newTitle );

    this.ht.get(this.url).subscribe(resp=>{this.resultt2=resp;
      this.resultt=this.resultt2.data,
      this.loading=false})
   }

  ngOnInit() {

  }
  downloadpdf(){
    const doc = new jsPDF();
    doc.autoTable({html: '#my-table',theme:'striped'});
    doc.save('categories.pdf');
  
  }
 


}
