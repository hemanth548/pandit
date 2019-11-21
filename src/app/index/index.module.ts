import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { CountdownModule } from 'ngx-countdown';
import { RouterModule } from '@angular/router';
import { NgxLoadingModule } from 'ngx-loading';







@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatBottomSheetModule,
    MDBBootstrapModule,
    MatTabsModule,
    MatIconModule,
    CountdownModule,
    RouterModule,
    NgxLoadingModule.forRoot({ }),

  ],
  entryComponents: [
],



  
})
export class IndexModule { }
