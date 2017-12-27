import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './tables.routing';
import { Tables } from './tables.component';
import { BasicTables } from './components/basicTables/basicTables.component';
import { GenericTables } from './components/genericTables/genericTables.component';
import { GenericTableModule } from 'angular-generic-table';
import { BasicTablesService } from './components/basicTables/basicTables.service';
import { ResponsiveTable } from './components/basicTables/components/responsiveTable';
import { StripedTable } from './components/basicTables/components/stripedTable';
import { BorderedTable } from './components/basicTables/components/borderedTable';
import { HoverTable } from './components/basicTables/components/hoverTable';
import { CondensedTable } from './components/basicTables/components/condensedTable';
import { ContextualTable } from './components/basicTables/components/contextualTable';
import { GenericTablesService } from './components/genericTables/genericTables.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    GenericTableModule,
    routing
  ],
  declarations: [
    Tables,
    BasicTables,
    GenericTables,
    HoverTable,
    BorderedTable,
    CondensedTable,
    StripedTable,
    ContextualTable,
    ResponsiveTable
  ],
  providers: [
    BasicTablesService,
    GenericTablesService
  ]
})
export default class TablesModule {}
