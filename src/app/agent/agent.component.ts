import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  userName1: any;
  userName2: any;
  getURL = "http://115.112.122.99:3040/api/agent/getAgentDashboardData";
  resp;


  constructor(private authService: AuthService, private routerNavigate: Router, private ht:HttpClient) {
    this.userName1 = sessionStorage.getItem("fname");
    this.userName2 = sessionStorage.getItem("lname");
   
  }
  ngOnInit() {

    this.getDashboardData();
      
  }
  getDashboardData(){
    this.ht.get(this.getURL).subscribe(resp=>{
      this.resp = resp
      // this.counter()
    })
  }
  // counter(){
  // $('.count').each(function () {
  //   $(this).prop('Counter', 0).animate({
  //     Counter: $(this).text()
  //   }, {
  //     duration: 3000,
  //     easing: 'swing',
  //     step: function (now) {
  //       $(this).text(Math.ceil(now));
  //     }
  //   });
  // });
  // }

}