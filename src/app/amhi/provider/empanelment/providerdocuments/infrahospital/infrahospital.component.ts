import { Component, ViewEncapsulation} from '@angular/core';
import { IMyOptions } from 'mydatepicker';

@Component({
    selector: 'infra-hospital',
    encapsulation: ViewEncapsulation.None,
    template: require('./infrahospital.html'),
    styles: [require('./infrahospital.scss')]
})
export class Infrahospital {

    constructor() {
        
    }
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
    /*prv*/

    /*HSPTL*/
    /*DIAG*/
    /*AMBU*/
    /*DOCT*/
    /*HMCR*/
    /*PHRM*/

    /**/
    private prvHSPTLBioWstMngCert={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    private prvHSPTLBldPermit={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    private prvHSPTLFireSafe={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    private prvHSPTLPNDT={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    private prvHSPTLRadiatProCert={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    private prvHSPTLPollutionCntrl={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    private prvHSPTLNarcotics={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
}