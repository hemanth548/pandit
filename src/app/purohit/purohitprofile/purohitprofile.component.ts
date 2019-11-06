import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-purohitprofile',
  templateUrl: './purohitprofile.component.html',
  styleUrls: ['./purohitprofile.component.css']
})
export class PurohitprofileComponent implements OnInit {
  fname: string;
  lname: string;
  url: any = "";
  dummyEvent: any;
  constructor(private titleService: Title) { 
    const newTitle = "Purohit - ProfilePage"
    this.titleService.setTitle(newTitle);
  }
  ngOnInit() {
   
      this.fname=sessionStorage.getItem('purohitfname').toLocaleUpperCase();
      this.lname=sessionStorage.getItem('purohitlname').toLocaleUpperCase();
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        this.dummyEvent = event.target,
        this.url= this.dummyEvent.result;
      }
    }
  }
}
