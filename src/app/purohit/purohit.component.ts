import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

declare var $: any;


@Component({
  selector: 'app-purohit',
  templateUrl: './purohit.component.html',
  styleUrls: ['./purohit.component.css']
})

export class PurohitComponent implements OnInit {

  purohitfname: any;
  purohitlname: any;
  purohitterm: any;
  purohitemail: any;
  purohitpandit_id: string;
  purohitotp: string;
  purohitIdProof: string;

  constructor(private authService: AuthService, private routerNavigate: Router, private titleService: Title) {
    this.purohitfname = localStorage.getItem("purohitfname");
    const newTitle = "Dashboard - " + this.purohitfname.toUpperCase() + " : " + this.purohitpandit_id;
    this.titleService.setTitle(newTitle);

  }

  ngOnInit() {
  }

  logOutAction() {
    if (this.authService.logOutAction()) {
      this.routerNavigate.navigate(['login'])
    }
  }

}
