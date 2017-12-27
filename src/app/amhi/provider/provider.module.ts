import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { NgaModule } from '../../theme/nga.module';
import { GenericTableModule } from 'angular-generic-table/generic-table/generic-table.module';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { TagInputModule } from 'ng2-tag-input';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { ModalModule } from 'ng2-bootstrap/modal';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { MyDatePickerModule } from 'mydatepicker';

import { Provider } from './provider.component';
import { routing } from './provider.routing';
import { Home } from './home';
import { HomeService } from './home/home.service';

import { Register } from './register';
import { RegisterService } from './register/register.service';

import { FileUpload } from './fileUpload';
import { ImgSize } from './imgSize';
import { History } from './history';

import { Empanelment } from './empanelment';

import { Preferrednetwork } from './preferrednetwork';
import { Createnetwork } from './createnetwork';

import { Pis } from './empanelment/pis/pis.component';
import { Generalinformation } from './empanelment/pis/generalinformation/generalinformation.component';
import { GeneralinformationService } from './empanelment/pis/generalinformation/generalinformation.service';
import { Administrativeunitdetails } from './empanelment/pis/generalinformation/administrativeunitdetails/administrativeunitdetails.component';
import { Corporategroupdetails } from './empanelment/pis/generalinformation/corporategroupdetails/corporategroupdetails.component';
import { Providerdetails } from './empanelment/pis/generalinformation/providerdetails/providerdetails.component';
import { Contactdetails } from './empanelment/pis/generalinformation/contactdetails/contactdetails.component';
import { Servicesandclinicalspeciality } from './empanelment/pis/servicesandclinicalspeciality/servicesandclinicalspeciality.component';
import { Manpower } from './empanelment/pis/manpower/manpower.component';
import { Manpowerdetails } from './empanelment/pis/manpower/manpowerdetails/manpowerdetails.component';
import { ManpowerService } from './empanelment/pis/manpower/manpower.service';
import { Safetymeasure } from './empanelment/pis/safetymeasure/safetymeasure.component';
import { Infrapishospital } from './empanelment/pis/infrapishospital/infrapishospital.component';
import { Infrapisambulance } from './empanelment/pis/infrapisambulance/infrapisambulance.component';
import { Infrapisdiagnostic } from './empanelment/pis/infrapisdiagnostic/infrapisdiagnostic.component';
import { Infrapisdoctor } from './empanelment/pis/infrapisdoctor/infrapisdoctor.component';
import { Providerid } from './empanelment/pis/providerid/providerid.component';
import { Financial } from './empanelment/pis/financial/financial.component';

import { Providerdocuments } from './empanelment/providerdocuments/providerdocuments.component';
import { ProviderdocumentsService } from './empanelment/providerdocuments/providerdocuments.service';
import { Basicdetail } from './empanelment/providerdocuments/basicdetail/basicdetail.component';
import { Compliancedoctordental } from './empanelment/providerdocuments/compliancedoctordental/compliancedoctordental.component';
import { Financialdocuments } from './empanelment/providerdocuments/financialdocuments/financialdocuments.component';
import { Infraambulance } from './empanelment/providerdocuments/infraambulance/infraambulance.component';
import { Infradiagnostic } from './empanelment/providerdocuments/infradiagnostic/infradiagnostic.component';
import { Infrahospital } from './empanelment/providerdocuments/infrahospital/infrahospital.component';
import { Manpowerhospital } from './empanelment/providerdocuments/manpowerhospital/manpowerhospital.component';
import { Safetyambulance } from './empanelment/providerdocuments/safetyambulance/safetyambulance.component';
import { Safetydiagnostic } from './empanelment/providerdocuments/safetydiagnostic/safetydiagnostic.component';
import { Safetydoctordental } from './empanelment/providerdocuments/safetydoctordental/safetydoctordental.component';
import { Safetyhospital } from './empanelment/providerdocuments/safetyhospital/safetyhospital.component';


import { Scoringandgrading } from './empanelment/scoringandgrading/scoringandgrading.component';
import { Grading } from './empanelment/scoringandgrading/grading/grading.component';
import { Providercomparison } from './empanelment/scoringandgrading/providercomparison/providercomparison.component';

import { Tariffmapping } from './empanelment/tariffmapping/tariffmapping.component';
import { RoomRentComponent } from './empanelment/tariffmapping/roomrent/roomrent.component';
import { ProviderServiceDetailsComponent } from './empanelment/tariffmapping/providerservicedetails/providerservicedetails.component';
import { ProviderServicetariffmapComponent } from './empanelment/tariffmapping/providerservicetariffmap/providerservicetariffmap.component';
import { ProviderRateListComponent } from './empanelment/tariffmapping/providerratelist/providerratelist.component';
import { MedicalManagementComponent } from './empanelment/tariffmapping/providerratelist/medicalmanagement/medicalmanagement.component';
import { SurgicalManagementComponent } from './empanelment/tariffmapping/providerratelist/surgicalmanagement/surgicalmanagement.component';
import { PRLRoomRentComponent } from './empanelment/tariffmapping/providerratelist/prlroomrent/prlroomrent.component';
import { HomeCareComponent } from'./empanelment/tariffmapping/providerratelist/homecarepackage/homecarepackage.component';
import { ProcedureComponent } from'./empanelment/tariffmapping/providerratelist/opentariffprocedure/opentariffprocedure.component';
import { InvestigationComponent } from'./empanelment/tariffmapping/providerratelist/investigation/investigation.component';
import { LineItemComponent } from'./empanelment/tariffmapping/providerratelist/lineitem/lineitem.component';
import { ActualItemComponent } from'./empanelment/tariffmapping/providerratelist/actualitem/actualitem.component';
import { PharmaDrugComponent } from'./empanelment/tariffmapping/providerratelist/pharmadrug/pharmadrug.component';
import { ImplantConsumeComponent } from'./empanelment/tariffmapping/providerratelist/implantconsume/implantconsume.component';
import { SpecialTariffComponent } from'./empanelment/tariffmapping/providerratelist/specialtariff/specialtariff.component';
import { PreferdBenefitsComponent } from'./empanelment/tariffmapping/providerratelist/preferdbenefits/preferdbenefits.component';


import { Paymentdiscount } from './empanelment/paymentdiscount/paymentdiscount.component';
import { Earlypayment } from './empanelment/paymentdiscount/earlypayment/earlypayment.component';
import { Latepayment } from './empanelment/paymentdiscount/latepayment/latepayment.component';
import { Bulkpayment } from './empanelment/paymentdiscount/bulkpayment/bulkpayment.component';
import { Bulkdiscount } from './empanelment/paymentdiscount/bulkdiscount/bulkdiscount.component';
import { Downbilling } from './empanelment/paymentdiscount/downbilling/downbilling.component';
import { Taxdetails } from './empanelment/paymentdiscount/taxdetails/taxdetails.component';

import { Mou } from './empanelment/mou/mou.component';
import { Detail } from './empanelment/mou/detail/detail.component';
import { Renewal } from './empanelment/mou/renewal/renewal.component';
import { Bank } from './empanelment/mou/bank/bank.component';
import { ProviderGlobalService } from './global/providerGlobal.service';
import { ProviderURLConstants } from './common/providerURLConstants';
import { MessageConstants } from '../global/messageConstants';
import { SharedMethods } from '../global/sharedMethods';

import { TariffCompare } from './tariffcompare';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CustomFormsModule,
        NgaModule,
        routing,
        GenericTableModule,
        MultiselectDropdownModule,
        TagInputModule,
        MyDatePickerModule,
        AccordionModule.forRoot(),
        TabsModule.forRoot(),
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
    ],
    declarations: [
        Provider,
        Home,
        Preferrednetwork,
        Createnetwork,
        Register,
        History,
        Empanelment,
        FileUpload,
        ImgSize,
        /*FileSelectDirective,
        FileDropDirective,
        Uploader,
        Alsoknownas,*/
        Pis,
        Generalinformation,
        Contactdetails,
        Administrativeunitdetails,
        Corporategroupdetails,
        Providerdetails,
        Servicesandclinicalspeciality,
        Manpower,
        Manpowerdetails,
        Safetymeasure,
        Infrapishospital,
        Infrapisambulance,
        Infrapisdiagnostic,
        Infrapisdoctor,
        Providerid,
        Financial,

        Providerdocuments,
        Basicdetail,
        Compliancedoctordental,
        Financialdocuments,
        Infraambulance,
        Infradiagnostic,
        Infrahospital,
        Manpowerhospital,
        Safetyambulance,
        Safetydiagnostic,
        Safetydoctordental,
        Safetyhospital,

        Scoringandgrading,
        Grading,
        Providercomparison,

        Tariffmapping,
        RoomRentComponent,
        ProviderServiceDetailsComponent,
        ProviderServicetariffmapComponent,
        ProviderRateListComponent,
        MedicalManagementComponent,
        SurgicalManagementComponent,
        PRLRoomRentComponent,
        HomeCareComponent,
        ProcedureComponent,
        InvestigationComponent,
        LineItemComponent,
        ActualItemComponent,
        PharmaDrugComponent,
        ImplantConsumeComponent,
        SpecialTariffComponent,
        PreferdBenefitsComponent,

        Paymentdiscount,
        Earlypayment,
        Latepayment,
        Bulkpayment,
        Bulkdiscount,
        Downbilling,
        Taxdetails,
        
        Mou,
        Detail,
        Renewal,
        Bank,

        TariffCompare

    ],
    providers: [
        ManpowerService,
        RegisterService,
        HomeService,
        ProviderGlobalService,
        GeneralinformationService,
        ProviderdocumentsService,
        ProviderURLConstants,
        MessageConstants,
        SharedMethods
    ]
})
export default class ProviderModule { }