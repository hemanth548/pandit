import { Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';





export const HomeRoutes: Routes = [ {
    path:'',component:AdmindashboardComponent,
    children:[
        {path:'agentdashboard',component:AdmindashboardComponent}
    ]
}    
]