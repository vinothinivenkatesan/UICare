import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { Accordions } from './accordions.component';
import { routing } from './accordions.routing';
import { AccordionModule } from 'ng2-bootstrap/accordion';


@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        routing,
        AccordionModule.forRoot()  
    ],
    declarations: [
        Accordions
    ]
})
export default class AccordionsModule { }
