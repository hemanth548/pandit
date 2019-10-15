import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  userName1: any;
  userName2: any;
  term: any;
  bookingCount: any;


  constructor(private authService: AuthService, private routerNavigate: Router) {
    this.userName1 = localStorage.getItem("fname");
    this.userName2 = localStorage.getItem("lname");

  }
  ngOnInit() {


    $('.count').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });

  }



}