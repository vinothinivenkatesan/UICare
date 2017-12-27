import { Routes, RouterModule }  from '@angular/router';

import { Tabsets } from './tabsets.component';

const routes: Routes = [
  {
    path: '',
    component: Tabsets,
    children: [
     
    ]
  }
];

export const routing = RouterModule.forChild(routes);
