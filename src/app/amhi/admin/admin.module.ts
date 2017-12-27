import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { NgaModule } from '../../theme/nga.module';
import { GenericTableModule } from 'angular-generic-table/generic-table/generic-table.module';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { TagInputModule } from 'ng2-tag-input';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { ModalModule } from 'ng2-bootstrap/modal';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { MyDatePickerModule } from 'mydatepicker';

import { Admin } from './admin.component';
import { routing } from './admin.routing';

import { Communication } from './communication/communication.component';
import { Configuration } from './communication/configuration/configuration.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CustomFormsModule,
        NgaModule,
        routing,
        GenericTableModule,
        MultiselectDropdownModule,
        TagInputModule,
        MyDatePickerModule,
        AccordionModule.forRoot(),
        TabsModule.forRoot(),
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
    ],
    declarations: [
        Admin,
        Configuration,
        Communication
    ],
    providers: [
    ]
})
export default class ProviderModule { }