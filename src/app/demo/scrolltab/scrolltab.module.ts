import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { Scrolltab } from './scrolltab.component';
import { routing }       from './scrolltab.routing';
@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing
  ],
  declarations: [
    Scrolltab
  ]
})
export default class ScrolltabModule {}
