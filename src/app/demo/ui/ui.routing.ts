import { Routes, RouterModule }  from '@angular/router';

import { Ui } from './ui.component';
import { Buttons } from './components/buttons/buttons.component';
import { Grid } from './components/grid/grid.component';
import { Icons } from './components/icons/icons.component';
import { Typography } from './components/typography/typography.component';
import { Modal } from './components/modal/modal.component';
import { Megamenu } from './components/megamenu/megamenu.component';
import { Notification } from './components/notification/notification.component';
import { Tooltip } from './components/tooltip/tooltip.component';
import { Progressor } from './components/progressor/progressor.component';
import { Editor } from './components/editor/editor.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Ui,
    children: [
      { path: 'buttons', component: Buttons },
      { path: 'grid', component: Grid },
      { path: 'icons', component: Icons },
      { path: 'typography', component: Typography },
      { path: 'modal', component: Modal },
      { path: 'megamenu', component: Megamenu },
      { path: 'notification', component: Notification },
      { path: 'tooltip', component: Tooltip },
      { path: 'progressbar', component: Progressor },
      { path: 'editor', component: Editor },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
