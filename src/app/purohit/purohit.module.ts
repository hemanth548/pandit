import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurohitdashboardComponent } from './purohitdashboard/purohitdashboard.component';
import { PurohitservicesComponent } from './purohitservices/purohitservices.component';
import { PurohitprofileComponent } from './purohitprofile/purohitprofile.component';
import { PurohitpasswordComponent } from './purohitpassword/purohitpassword.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatProgressSpinnerModule, MatPaginatorModule, MatSlideToggleModule, MatInputModule, MatSelectModule, MatTabsModule, MatIconModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PurohitComponent } from './purohit.component';



@NgModule({
  declarations: [PurohitdashboardComponent, PurohitservicesComponent, PurohitprofileComponent, PurohitpasswordComponent, PurohitComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    NgxPaginationModule,
    NgxSpinnerModule,
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
    NgxSpinnerModule,
    MDBBootstrapModule,
    RouterModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
})
export class PanditModule {
    
constructor(private act:ActivatedRoute) {
}

 }
