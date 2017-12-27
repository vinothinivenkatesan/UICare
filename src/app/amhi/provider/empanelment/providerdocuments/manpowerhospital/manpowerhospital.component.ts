import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'manpower-hospital',
    encapsulation: ViewEncapsulation.None,
    template: require('./manpowerhospital.html'),
    styles: [require('./manpowerhospital.scss')]
})
export class Manpowerhospital {

    constructor() {
        
    }
    private prvHSPTLConsult={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    private prvHSPTLOPD={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
}