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
    this.fname=localStorage.getItem("fname");
    this.lname=localStorage.getItem("lname");
    this.email=localStorage.getItem("email");
    this.agent_id=localStorage.getItem("agent_id");
    this.roll=localStorage.getItem("A-role");
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
