import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { GenericTableModule } from 'angular-generic-table/generic-table/generic-table.module';
import { ProgressbarModule } from 'ng2-bootstrap/progressbar';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { Dashboard } from './dashboard.component';
import { routing } from './dashboard.routing';
import { GlobalURLConstants } from './../global/globalURLConstants';
import { TooltipModule } from 'ng2-bootstrap/tooltip';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        GenericTableModule,
        ProgressbarModule.forRoot(),
        TabsModule.forRoot(),
        TooltipModule.forRoot(),
        routing
    ],
    declarations: [
        Dashboard
    ],
    providers: [
        GlobalURLConstants
    ]
})
export default class DashboardModule { }
