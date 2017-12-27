import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { TagInputModule } from 'ng2-tag-input';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { GenericTableModule } from 'angular-generic-table/generic-table/generic-table.module';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { MyDatePickerModule } from 'mydatepicker';
import { TabsModule } from 'ng2-bootstrap/tabs';

import { Product } from './product.component';
import { routing } from './product.routing';

import { Home } from './home';
import { Createproduct } from './createproduct';

import { Channeldetails } from './createproduct/channeldetails/channeldetails.component';
import { ChanneldetailsService } from './createproduct/channeldetails/channeldetails.service';
import { Productdetails } from './createproduct/productdetails/productdetails.component';
import { ProductdetailsService } from './createproduct/productdetails/productdetails.service';
import { Waitingperiod } from './createproduct/productdetails/waitingperiod/waitingperiod.component';
import { Relationship } from './createproduct/productdetails/relationship/relationship.component';
import { MaxSI } from './createproduct/productdetails/maxSI/maxSI.component';
import { Productconfiguration } from './createproduct/productconfiguration/productconfiguration.component';
import { Coveragedetails } from './createproduct/coveragedetails/coveragedetails.component';
import { Costsharingdetails } from './createproduct/costsharingdetails/costsharingdetails.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        AccordionModule.forRoot(),
        TabsModule.forRoot(),
        TagInputModule,
        routing,
        GenericTableModule,
        MyDatePickerModule,
        MultiselectDropdownModule
    ],
    declarations: [
        Product,
        Home,
        Createproduct,
        Channeldetails,
        Productdetails,
        Productconfiguration,
        Waitingperiod,
        Relationship,
        MaxSI,        
        Coveragedetails,
        Costsharingdetails
    ],
    providers: [
        ChanneldetailsService,
        ProductdetailsService
    ]
})
export default class ProductModule { }
