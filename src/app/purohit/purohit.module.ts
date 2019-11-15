import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurohitdashboardComponent } from './purohitdashboard/purohitdashboard.component';
import { PurohitservicesComponent } from './purohitservices/purohitservices.component';
import { PurohitprofileComponent } from './purohitprofile/purohitprofile.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatProgressSpinnerModule, MatPaginatorModule, MatSlideToggleModule, MatInputModule, MatSelectModule, MatTabsModule, MatIconModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PurohitComponent } from './purohit.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [PurohitdashboardComponent, PurohitservicesComponent, PurohitprofileComponent, PurohitComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatSlideToggleModule,
    MDBBootstrapModule,
    NoopAnimationsModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    // NoopAnimationsModule,
    MDBBootstrapModule,
    RouterModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
  ],
})
export class PanditModule {
    
constructor(private act:ActivatedRoute) {
}

 }
