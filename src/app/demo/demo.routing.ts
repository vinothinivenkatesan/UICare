import { Routes, RouterModule } from '@angular/router';
import { Demo } from 'app/demo/demo.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: 'demo',
        component: Demo,
        children: [
            { path: 'tables', loadChildren: () => System.import('app/demo/tables/tables.module') },
            { path: 'forms', loadChildren: () => System.import('app/demo/forms/forms.module') },
            { path: 'accordion', loadChildren: () => System.import('app/demo/accordions/accordions.module') },
            { path: 'timeout', loadChildren: () => System.import('app/demo/timeout/timeout.module') },
            { path: 'tabs', loadChildren: () => System.import('./tabsets/tabsets.module') },
            { path: 'scrolltab', loadChildren: () => System.import('./scrolltab/scrolltab.module') },
            { path: 'ui', loadChildren: () => System.import('./ui/ui.module') },
            { path: 'poc', loadChildren: () => System.import('./poc/poc.module') },
        ]
    }
];



export const routing = RouterModule.forChild(routes);

