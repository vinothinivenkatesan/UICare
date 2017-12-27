import { Routes, RouterModule }  from '@angular/router';

import { Tabs } from './tabs.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tabs,
    children: [
     
    ]
  }
];

export const routing = RouterModule.forChild(routes);
