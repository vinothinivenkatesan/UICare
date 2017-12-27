import { Routes, RouterModule } from '@angular/router';

import { Timeout } from './timeout.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: Timeout,
        children: [

        ]
    }
];

export const routing = RouterModule.forChild(routes);
