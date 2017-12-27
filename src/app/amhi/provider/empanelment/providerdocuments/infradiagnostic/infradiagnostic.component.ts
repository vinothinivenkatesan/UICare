import { Component, ViewEncapsulation} from '@angular/core';
import { IMyOptions } from 'mydatepicker';

@Component({
    selector: 'infra-diagnostic',
    encapsulation: ViewEncapsulation.None,
    template: require('./infradiagnostic.html'),
    styles: [require('./infradiagnostic.scss')]
})
export class Infradiagnostic {

    constructor() {
        
    }
    //private formRef='';
    private prvDIAGBioWstMngCert={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    private prvDIAGEquipYr={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    private prvDIAGBldPermit={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    private prvDIAGFireSafe={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    private prvDIAGPNDT={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    private prvDIAGRadiatProCert={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    private prvDIAGNarcotics={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    myDatePickerOptions: IMyOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'dd/mm/yyyy',//yyyy-mm-dd',
        markCurrentDay:true,
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        inline: false,/*
        disableUntil: { year: 2016, month: 8, day: 10 },*/
        selectionTxtFontSize: '16px'
    };
        
    
}