import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup

import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting

import { Timeout } from './timeout.component';
import { routing } from './timeout.routing';


@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        routing,
        MomentModule,
        NgIdleKeepaliveModule.forRoot()
    ],
    declarations: [
        Timeout
    ]
})
export default class TimeoutModule { }

