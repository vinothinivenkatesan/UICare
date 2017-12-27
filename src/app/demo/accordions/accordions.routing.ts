import { Routes, RouterModule }  from '@angular/router';

import { Accordions } from './accordions.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Accordions,
    children: [
     
    ]
  }
];

export const routing = RouterModule.forChild(routes);
