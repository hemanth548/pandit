import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpBackend } from '@angular/common/http';
declare var $:any;

@Component({
    selector: 'app-agent',
    templateUrl: './agent.component.html',
    styleUrls: ['./agent.component.css']
  })
export class AgentComponent implements OnInit {
    userName1:any;
    userName2:any;
    term:any;
    bookingCount:any;


    constructor(private authService: AuthService, private routerNavigate: Router, private spinner: NgxSpinnerService) { 
      this.userName1=localStorage.getItem("fname");
      this.userName2=localStorage.getItem("lname");
      // this.bookingCount=localStorage.getItem('bookingCount');
      
    } 
    ngOnInit() {

 
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 3500);

      $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    ///////////////////////////////////////
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
    back(){
      window.history.forward();
  }

    name=localStorage.getItem("mobile");
    public pieChartData = [{
      id: 0,
      label: 'slice 1',
      value: 50,
      color: 'blue',
    }, {
      id: 1,
      label: 'slice 2',
      value: 20,
      color: 'black',
    }, {
      id: 2,
      label: 'slice 3',
      value: 30,
      color: 'red',
    }]
  
}