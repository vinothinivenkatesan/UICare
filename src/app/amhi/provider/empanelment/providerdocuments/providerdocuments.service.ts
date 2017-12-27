import { Injectable } from '@angular/core';
import { Privileges } from './../../../../theme/services/privileges/privileges.service';
import { ReferenceData } from './../../../../theme/services/referenceData/referenceData.service';
import { WebService } from './../../../../theme/services/webService/webService.service';
@Injectable()
export class ProviderdocumentsService{
    private accordianGroupOrder=['basicDoc','financialDoc','staffHospitalDoc','safetyHospitalDoc','infraHospitalDoc','safetyAmbulanceDoc','infraAmbulanceDoc','safetyDiagnosticDoc','infraDiagnosticDoc','safetyDoctorDoc','complianceDoctorDoc']
    private currentIndex=0;
    public opened=this.accordianGroupOrder[this.currentIndex];
    constructor( private _webService: WebService, private _privilege: Privileges, private _referenceData: ReferenceData){
    }
    openNext(){
        this.currentIndex++;
        this.opened=this.accordianGroupOrder[this.currentIndex];
    }
    clicked(currentAccordian){
        this.currentIndex=this.accordianGroupOrder.indexOf(currentAccordian);
        this.opened=this.accordianGroupOrder[this.currentIndex];
    }
}