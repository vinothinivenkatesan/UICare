import { Component, ViewEncapsulation} from '@angular/core';
import { IMyOptions } from 'mydatepicker';

@Component({
    selector: 'compliance-doctor-dental',
    encapsulation: ViewEncapsulation.None,
    template: require('./compliancedoctordental.html'),
    styles: [require('./compliancedoctordental.scss')]
})
export class Compliancedoctordental {

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
    private prvRegCertificateDoctor={
            "dateOfIssue": null,//"21/02/2017",
            "dataOfExpiry": null,//"09/01/2017",
            "issuingAuthority": null,//"State Board",
            "pancardName": null,
            "documentTitle": null,//"Registration",
            "documents":[],
            "isDeleted":"N"
        };
    private prvOtherDoctorDoc={
            "dateOfIssue": null,//"21/02/2017",
            "dataOfExpiry": null,//"09/01/2017",
            "issuingAuthority": null,//"State Board",
            "pancardName": null,
            "documentTitle": null,//"Registration",
            "documents":[],
            "isDeleted":"N"
        };
}