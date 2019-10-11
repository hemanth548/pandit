import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  constructor(
    public ref: MatDialogRef<AdminloginComponent>,private fb:FormBuilder,private r:Router) {

    }

  onNoClick(): void {
    this.ref.close();
  }

  ngOnInit() {
  }
checkInput(input) {
    if (input.value.length > 0) {
      input.className = 'active';
    } else {
      input.className = '';
    }
  }
  log(v) {

  }
  f:FormGroup= this.fb.group({
    'email': [null, Validators.pattern],
    'password': [null, Validators.required]
  })

}
