import { Routes, RouterModule } from '@angular/router';
import { Admin } from './admin.component';
import { Communication } from './communication/communication.component';
import { Configuration } from './communication/configuration/configuration.component';

const routes: Routes = [
    {
        path: '',
        component: Admin,
        children: [
            { path: 'communication', component: Communication },
            { path: 'communication/configuration', component: Configuration }
        ]
    }
];

export const routing = RouterModule.forChild(routes);
