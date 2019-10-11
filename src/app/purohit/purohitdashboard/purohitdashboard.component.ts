import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

declare var $:any;


@Component({
  selector: 'app-purohitdashboard',
  templateUrl: './purohitdashboard.component.html',
  styleUrls: ['./purohitdashboard.component.css']
})

export class PurohitdashboardComponent implements OnInit {
   
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
    this.roll=localStorage.getItem("role");
    const newTitle="Dashboard of "+this.fname.toUpperCase( )+" : "+this.agent_id;

    this.titleService.setTitle( newTitle );

  }

  ngOnInit() {
    $(document).ready(function () {
      $(".push_menu").click(function () {
        $(".wrapper").toggleClass("active");
      });


      (function () {
        "use strict";

        var treeviewMenu = $('.app-menu');

        // Toggle Sidebar
        $('[data-toggle="sidebar"]').click(function (event) {
          event.preventDefault();
          $('.app').toggleClass('sidenav-toggled');
        });

        // Activate sidebar treeview toggle
        $("[data-toggle='treeview']").click(function (event) {
          event.preventDefault();
          if (!$(this).parent().hasClass('is-expanded')) {
            treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
          }
          $(this).parent().toggleClass('is-expanded');
        });

        // Set initial active toggle
        $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

        //Activate bootstrip tooltips
        $("[data-toggle='tooltip']").tooltip();

      })();

    });
  } 
 slide=false; 
  onChange(e){
    this.slide=e;
    if(this.slide==false) {
document.body.style.background = "white";
this.slide=true;
    }
else {
document.body.style.background = "#BB9797";
this.slide=false;
}
}
logOutAction() {
  if (this.authService.logOutAction()) {
    this.routerNavigate.navigate(['login'])
  }
}

}
