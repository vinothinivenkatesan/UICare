import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../theme/nga.module';
import { routing } from './demo.routing';
import { Demo } from './demo.component';


@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        routing       
    ],
    declarations: [
        Demo
    ]
})
export class DemoModule { }
