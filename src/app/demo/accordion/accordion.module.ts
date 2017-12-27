import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { Accordion } from './accordion.component';
import { routing } from './accordion.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'angular2-schema-form';

@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        NgbModule,
        routing,
        SchemaFormModule       
    ],
    declarations: [
        Accordion
    ],
    providers: [{ provide: WidgetRegistry, useClass: DefaultWidgetRegistry }]
})
export default class AccordionModule { }
