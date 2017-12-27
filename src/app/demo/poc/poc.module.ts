import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenericTableModule } from 'angular-generic-table/generic-table/generic-table.module';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { TagInputModule } from 'ng2-tag-input';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'angular2-schema-form';
import { Customcrud } from './crud/component/customcrud.component';


import { Poc } from './poc.component';
import { routing } from './poc.routing';
import { ReferenceData } from './referenceData';
import { ReferenceDataService } from './referenceData/referenceData.service';
import { ClaimEntry } from './claimEntry';
import { ClaimEntryService } from './claimEntry/claimEntry.service';

import { PlanVariantCoverages } from './planVariantCoverages/planVariantCoverages.component';
import { TagWithMultiselect } from './tagWithMultiselect/tagWithMultiselect.component';
import { Crud } from './crud/crud.component';
import { CoverageMaster } from './coverageMaster/coverageMaster.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        NgbModule,
        routing,
        GenericTableModule,
        MultiselectDropdownModule,
        TagInputModule,        
        SchemaFormModule                
    ],
    declarations: [
        Poc,
        ReferenceData,
        ClaimEntry,
        PlanVariantCoverages,
        TagWithMultiselect,
        Customcrud,
        Crud,
        CoverageMaster
    ],
    providers: [
        ReferenceDataService,
        ClaimEntryService,
        { provide: WidgetRegistry, useClass: DefaultWidgetRegistry}
    ]
})

export default class PocModule { }