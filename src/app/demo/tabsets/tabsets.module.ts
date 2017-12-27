import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { Tabsets } from './tabsets.component';
import { routing } from './tabsets.routing';
import { TabsModule } from 'ng2-bootstrap/tabs';
@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        TabsModule.forRoot(),
        routing
    ],
    declarations: [
        Tabsets
    ]
})
export default class TabsetsModule { }
