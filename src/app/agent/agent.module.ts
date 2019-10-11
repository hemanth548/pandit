import { AgentRoutes } from './agent.router';
import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentdashboardComponent } from './agentdashboard/agentdashboard.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentpanditservicesComponent } from './agentpanditservices/agentpanditservices.component';
import { AgentprofileComponent } from './agentprofile/agentprofile.component';
import { AgentpanditsComponent } from './agentpandits/agentpandits.component';
import { AgentusersComponent } from './agentusers/agentusers.component';
import { AgentcategoriesComponent } from './agentcategories/agentcategories.component';
import { AgentbookingsComponent } from './agentbookings/agentbookings.component';
import { AgentComponent } from './agent.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AgmCoreModule } from '@agm/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts'; // this is needed!
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';






@NgModule({
  declarations: [AgentdashboardComponent, AgentpanditservicesComponent, AgentprofileComponent, AgentpanditsComponent, AgentusersComponent, AgentcategoriesComponent, AgentbookingsComponent, AgentComponent],
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

export class AgentModule { 
  
constructor(private act:ActivatedRoute) {
}
}
