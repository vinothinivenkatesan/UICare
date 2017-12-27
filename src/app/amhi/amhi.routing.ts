import { Routes, RouterModule } from '@angular/router';
import { Amhi } from './amhi.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => System.import('./login/login.module')
    },
    {
        path: 'amhi',
        component: Amhi,
        children: [
            { path: 'login', redirectTo: '/login', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module')},
            { path: 'product', loadChildren: () => System.import('./product/product.module') },
            { path: 'provider', loadChildren: () => System.import('./provider/provider.module')},
            { path: 'admin', loadChildren: () => System.import('./admin/admin.module')},
          //{ path: 'provider', loadChildren: () => System.import('./provider/provider.module'), canActivate: [AuthGuard] }
        ]
    }
];

export const routing = RouterModule.forChild(routes);
