import { Routes } from '@angular/router';
import { PurohitservicesComponent } from './purohitservices/purohitservices.component';
import { PurohitprofileComponent } from './purohitprofile/purohitprofile.component';
import { PurohitpasswordComponent } from './purohitpassword/purohitpassword.component';
import { AuthGuard } from '../gaurds/auth.guard';
import { PurohitdashboardComponent } from './purohitdashboard/purohitdashboard.component';
import { PurohitComponent } from './purohit.component';


export const Purohitroutes: Routes = [
    {path:'',component:PurohitComponent,canActivate:[AuthGuard],
    children:[
    {path:'purohit',component:PurohitComponent},
    {path:'purohitdashboard',component:PurohitdashboardComponent},
    {path:'purohitservices',component:PurohitservicesComponent},
    {path:'purohitpassword',component:PurohitpasswordComponent},
    {path:'purohitprofile',component:PurohitprofileComponent},
  
    ]
   }
]