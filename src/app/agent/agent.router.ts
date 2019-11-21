import { Routes, ActivatedRoute } from '@angular/router';
import { AgentdashboardComponent } from '../agent/agentdashboard/agentdashboard.component';
import { AgentComponent } from './agent.component';
import { AgentprofileComponent } from './agentprofile/agentprofile.component';
import { AgentpanditsComponent } from './agentpandits/agentpandits.component';
import { AgentusersComponent } from './agentusers/agentusers.component';
import { AgentcategoriesComponent } from './agentcategories/agentcategories.component';
import { AgentbookingsComponent } from './agentbookings/agentbookings.component';
import { AuthGuard } from '../gaurds/auth.guard';







export const AgentRoutes: Routes = [{
    path: '', component: AgentdashboardComponent, canActivate: [AuthGuard],
    children: [
        { path: 'agentdashboard/:fname/:lname/:agent_id', component: AgentComponent },
        { path: 'agent', component: AgentComponent },
        { path: 'agentprofile', component: AgentprofileComponent },
        { path: 'agentpandits', component: AgentpanditsComponent },
        { path: 'details/:pandit_id', component: AgentusersComponent },
        { path: 'agentcategory', component: AgentcategoriesComponent },
        { path: 'agentbooking', component: AgentbookingsComponent },




    ]
}
]