import { Component, ViewEncapsulation} from '@angular/core';
import { IMyOptions } from 'mydatepicker';

@Component({
    selector: 'infra-ambulance',
    encapsulation: ViewEncapsulation.None,
    template: require('./infraambulance.html'),
    styles: [require('./infraambulance.scss')]
})
export class Infraambulance {

    constructor() {
        
    }
    private prvAMBURegCertVhcl={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    private prvAMBUPollutCntrl={
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