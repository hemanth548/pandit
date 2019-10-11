import { Routes } from '@angular/router';
import { YajmanaboutusComponent } from './yajmanaboutus/yajmanaboutus.component';
import { YajmanpasswordComponent } from './yajmanpassword/yajmanpassword.component';
import { YajmanprofileComponent } from './yajmanprofile/yajmanprofile.component';
import { YajmanservicesComponent } from './yajmanservices/yajmanservices.component';
import { AuthGuard } from '../gaurds/auth.guard';
import { YajmandashboardComponent } from './yajmandashboard/yajmandashboard.component';

export const Yajmanroutes: Routes = [
    {path:'',component:YajmandashboardComponent,canActivate:[AuthGuard],
    children:[
    {path:'yajmandashboard',component:YajmandashboardComponent},
    {path:'yajmanservices',component:YajmanservicesComponent},
    {path:'yajmanaboutus',component:YajmanaboutusComponent},
    {path:'yajmanpassword',component:YajmanpasswordComponent},
    {path:'yajmanprofile',component:YajmanprofileComponent},
  
    ]
   }
]