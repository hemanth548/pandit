import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

declare var $:any;
@Component({
  selector: 'app-agentdashboard',
  templateUrl: './agentdashboard.component.html',
  styleUrls: ['./agentdashboard.component.css']
})
export class AgentdashboardComponent implements OnInit {
  fname:any;
  lname:any;
  roll:any;
  term:any;
  email:any;
  agent_id:any;

  constructor(private authService: AuthService, private routerNavigate: Router, private titleService: Title) { 
    this.fname=sessionStorage.getItem("fname");
    this.lname=sessionStorage.getItem("lname");
    this.email=sessionStorage.getItem("email");
    this.agent_id=sessionStorage.getItem("agent_id");
    this.roll=sessionStorage.getItem("A-role");
    const newTitle="Dashboard of "+this.fname.toUpperCase( )+" : "+this.agent_id;

    this.titleService.setTitle( newTitle );

  }

  ngOnInit() {
  } 
logOutAction() {
  if (this.authService.logOutAction()) {
    this.routerNavigate.navigate(['login'])
  }
}
}
