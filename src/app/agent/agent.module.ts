import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentdashboardComponent } from './agentdashboard/agentdashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentpanditservicesComponent } from './agentpanditservices/agentpanditservices.component';
import { AgentprofileComponent } from './agentprofile/agentprofile.component';
import { AgentpanditsComponent } from './agentpandits/agentpandits.component';
import { AgentusersComponent } from './agentusers/agentusers.component';
import { AgentcategoriesComponent } from './agentcategories/agentcategories.component';
import { AgentbookingsComponent } from './agentbookings/agentbookings.component';
import { AgentComponent } from './agent.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AgmCoreModule } from '@agm/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';






@NgModule({
  declarations: [AgentdashboardComponent, AgentpanditservicesComponent, AgentprofileComponent, AgentpanditsComponent, AgentusersComponent, AgentcategoriesComponent, AgentbookingsComponent, AgentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MDBBootstrapModule,
    NoopAnimationsModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MDBBootstrapModule,
    RouterModule,
    MatTabsModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],

})

export class AgentModule {

  constructor() {
  }
}
