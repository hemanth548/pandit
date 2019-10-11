
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';






export const Indexroutes: Routes = [
    {path:'',component:LoginComponent,
    children:[
    {path:'login',component:LoginComponent},
  
    ]
   }
]