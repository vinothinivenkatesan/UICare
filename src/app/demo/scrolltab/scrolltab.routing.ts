import { Routes, RouterModule }  from '@angular/router';

import { Scrolltab } from './scrolltab.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Scrolltab,
    children: [
     
    ]
  }
];

export const routing = RouterModule.forChild(routes);
