import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../theme/nga.module';
import { routing } from './amhi.routing';
import { Amhi } from './amhi.component';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
    imports: [
        CustomFormsModule,
        CommonModule,
        NgaModule,
        routing
    ],
    declarations: [
        Amhi  
    ]
})
export class AmhiModule { }