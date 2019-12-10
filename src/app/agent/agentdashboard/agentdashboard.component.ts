import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2'

declare var $:any;
@Component({
  selector: 'app-agentdashboard',
  templateUrl: './agentdashboard.component.html',
  styleUrls: ['./agentdashboard.component.css']
})
export class AgentdashboardComponent implements OnInit {
fname:any;
lname: any;
agent_id: any;
  term:any;
  loading: boolean;

  constructor(private authService: AuthService, private routerNavigate: Router, private titleService: Title) { 
    this.fname=sessionStorage.getItem("fname");
    this.lname=sessionStorage.getItem("lname");
    this.agent_id=sessionStorage.getItem("agent_id");
    const newTitle="Dashboard of "+this.fname.toUpperCase( )+" : "+this.agent_id;
    this.titleService.setTitle( newTitle );
  }
  ngAfterViewInit() {
    this.routerNavigate.events
        .subscribe((event) => {
            if(event instanceof NavigationStart) {
                this.loading = true;
            }
            else if (
                event instanceof NavigationEnd || 
                event instanceof NavigationCancel
                ) {
                this.loading = false;
            }
            else
            this.loading = false;
        });
}
  ngOnInit() {
  } 
  logOutAction() {
    Swal.fire({
      title: 'Are you sure to Logout?',
      text: "This action moves you to landing page!",
      confirmButtonColor: '#FA4E30',
      confirmButtonText: 'Yes! Get Me Out',
      customClass: 'swal-height'
    }).then((result) => {
      if (result.value) {
        if (this.authService.logOutAction()) {
          this.routerNavigate.navigate(['login'])
        }
      }
    })
  }
}
