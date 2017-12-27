import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './ui.routing';
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
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ModalModule } from 'ng2-bootstrap/modal';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { ProgressbarModule } from 'ng2-bootstrap/progressbar';
import {CKEditorModule} from 'ng2-ckeditor';

import { FlatButtons } from './components/buttons/components/flatButtons';
import { RaisedButtons } from './components/buttons/components/raisedButtons';
import { SizedButtons } from './components/buttons/components/sizedButtons';
import { DisabledButtons } from './components/buttons/components/disabledButtons';
import { IconButtons } from './components/buttons/components/iconButtons';
import { LargeButtons } from './components/buttons/components/largeButtons';
import { DropdownButtons } from './components/buttons/components/dropdownButtons';
import { GroupButtons } from './components/buttons/components/groupButtons';
import { IconsService } from './components/icons/icons.service';


@NgModule({
    imports: [
        CommonModule,
        ToastModule,
        FormsModule,
        NgaModule,        
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        ProgressbarModule.forRoot(),
        routing,
        CKEditorModule
    ],
    declarations: [
        Buttons,
        Grid,
        Icons,
        Typography,
        Megamenu,
        Ui,
        Modal,
        Notification,
        Tooltip,
        FlatButtons,
        RaisedButtons,
        SizedButtons,
        DisabledButtons,
        IconButtons,
        LargeButtons,
        DropdownButtons,
        GroupButtons,
        Progressor,
        Editor
    ],
    providers: [
        IconsService,
        ToastModule
    ]
})
export default class UiModule {
}
