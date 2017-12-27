import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'safety-ambulance',
    encapsulation: ViewEncapsulation.None,
    template: require('./safetyambulance.html'),
    styles: [require('./safetyambulance.scss')]
})
export class Safetyambulance {

    constructor() {
        
    }
    prvAMBUISO={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
}