import { Routes } from '@angular/router';
import { PurohitservicesComponent } from './purohitservices/purohitservices.component';
import { PurohitprofileComponent } from './purohitprofile/purohitprofile.component';
import { AuthGuard } from '../gaurds/auth.guard';
import { PurohitdashboardComponent } from './purohitdashboard/purohitdashboard.component';
import { PurohitComponent } from './purohit.component';
import { HomeComponent } from './home/home.component';


export const Purohitroutes: Routes = [
    {path:'',component:PurohitComponent,canActivate:[AuthGuard],
    children:[
    {path:'purohithome/:pandit_id',component:HomeComponent},
    {path:'purohitdashboard',component:PurohitdashboardComponent},
    {path:'purohitservices',component:PurohitservicesComponent},
    {path:'purohitprofile',component:PurohitprofileComponent},
  
    ]
   }
]