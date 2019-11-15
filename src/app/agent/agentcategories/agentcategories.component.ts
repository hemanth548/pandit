import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-agentcategories',
  templateUrl: './agentcategories.component.html',
  styleUrls: ['./agentcategories.component.css']
})
export class AgentcategoriesComponent implements OnInit {
  panelOpenState = false;

  url: any = "http://192.168.1.55:3040/api/services/getCategory ";
  resultt: any;
  resultt2: any;
  term: any;
  p: any;
  loading = true;
  r1: any;
  rc1: any;
  r2: any;
  rc2: any;
  r3: any;
  rc3: any;
  activeTabIndex: any;
  showTabs1: boolean;
  showTabs2: boolean;
  randomItem: any;
  length:any;
  rc111: any;
  rc11: any;
  rc22: any;
  rc222: any;
  rc33: any;
  rc333: any;

  constructor(private ht: HttpClient, private titleService: Title, private service:AuthService) {
    const newTitle = "Pooja Categories"
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.getCategories();
    this.getPoojaCat();
    this.getYagnaCat();
    this.getKarmaCat();
  }

  getPoojaCat(){
    this.service.getCategories(1001).subscribe(resp=>{
      this.r1 = resp,
      this.rc1 = this.r1.data,
      this.rc11 = this.rc1.slice(0,this.rc1.length/2),
      this.rc111 = this.rc1.slice(this.rc1.length/2,this.rc1.length)

    });
  }
  getYagnaCat(){
    this.service.getCategories(1002).subscribe(resp=>{
      this.r2 = resp,
      this.rc2 = this.r2.data,
      this.rc22 = this.rc2.slice(0,this.rc2.length/2),
      this.rc222 = this.rc2.slice(this.rc2.length/2,this.rc2.length)
    });
  }
  getKarmaCat(){
    this.service.getCategories(1003).subscribe(resp=>{
      this.r3 = resp,
      this.rc3 = this.r3.data,
      this.rc33 = this.rc3.slice(0,this.rc3.length/2),
      this.rc333 = this.rc3.slice(this.rc3.length/2,this.rc3.length),
      this.loading = false
  })
}
getCategories(){
  this.ht.get(this.url).subscribe(resp => {
    this.resultt2 = resp;
    this.resultt = this.resultt2.data,
      this.loading = false
  })
}
}
