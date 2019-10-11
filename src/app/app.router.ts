import { Routes } from '@angular/router';
import { Indexroutes } from './index/index.router';
import { AgentRoutes } from './agent/agent.router';
import { Yajmanroutes } from './yajman/yajman.router';
import { Purohitroutes } from './purohit/purohit.router';


export const routes: Routes = [...Indexroutes,...AgentRoutes,...Yajmanroutes,...Purohitroutes]