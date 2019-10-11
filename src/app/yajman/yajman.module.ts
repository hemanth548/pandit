import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YajmandashboardComponent } from './yajmandashboard/yajmandashboard.component';
import { YajmanaboutusComponent } from './yajmanaboutus/yajmanaboutus.component';
import { YajmanprofileComponent } from './yajmanprofile/yajmanprofile.component';
import { YajmanpasswordComponent } from './yajmanpassword/yajmanpassword.component';
import { YajmanservicesComponent } from './yajmanservices/yajmanservices.component';



@NgModule({
  declarations: [YajmandashboardComponent, YajmanaboutusComponent, YajmanprofileComponent, YajmanpasswordComponent, YajmanservicesComponent],
  imports: [
    CommonModule,
  ]
})
export class YajmanModule { }