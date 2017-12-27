import { Routes, RouterModule }  from '@angular/router';

import { Accordion } from './accordion.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Accordion,
    children: [
     
    ]
  }
];

export const routing = RouterModule.forChild(routes);
