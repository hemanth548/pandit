import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentdashboardComponent } from './agentdashboard/agentdashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentprofileComponent } from './agentprofile/agentprofile.component';
import { AgentpanditsComponent } from './agentpandits/agentpandits.component';
import { AgentusersComponent } from './agentusers/agentusers.component';
import { AgentcategoriesComponent } from './agentcategories/agentcategories.component';
import { AgentbookingsComponent } from './agentbookings/agentbookings.component';
import { AgentComponent } from './agent.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { OrderModule } from 'ngx-order-pipe';
import {MatSelectModule} from '@angular/material/select';








@NgModule({
  declarations: [AgentdashboardComponent, AgentprofileComponent, AgentpanditsComponent, AgentusersComponent, AgentcategoriesComponent, AgentbookingsComponent, AgentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MDBBootstrapModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule,
    RouterModule,
    MatTabsModule,
    MatIconModule,
    MatExpansionModule,
    OrderModule,
    MatSelectModule


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],

})

export class AgentModule {

  constructor() {
  }
}
