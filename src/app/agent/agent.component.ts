
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
loading: boolean = true;
  resp: any;
  constructor(private ht:HttpClient) { }
  ngOnInit() {
    const getURL:any = "http://115.112.122.99:3040/api/agent/getAgentDashboardData";
    this.ht.get(getURL).subscribe(resp=>{
      this.resp = resp,this.loading = false;
    })      
  }
}