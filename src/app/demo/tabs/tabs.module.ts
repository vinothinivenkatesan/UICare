import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { Tabs } from './tabs.component';
import { routing } from './tabs.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        NgbModule,
        routing
    ],
    declarations: [
        Tabs
    ]
})
export default class TabsModule { }
