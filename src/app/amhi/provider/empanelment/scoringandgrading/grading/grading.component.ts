import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'grading',
    encapsulation: ViewEncapsulation.None,
    template: require('./grading.html'),
    styles: [require('./grading.scss')]
})
export class Grading {

    constructor() {
        
    }
    public providerscordingandgrading = {
        "ipBeds": "4",
        "numberofMajorOts": "8",
        "numberofMinorOts": "8",
        "icuBeds": "10",
        "laboratory": "5",
        "radiology": "10",
        "pharmacy": "5",
        "computer": "6",
        "accreditation": "4",
        "numberofAmbulance": "4",
        "numberofLabourRoom": "6",
        "specialtyAvailable": "8",
        "numberofFullTimeQualifiedDoctorAvailable": "10",
        "numberofVisitingConsultant": "10",
        "nursetoBedRatio" :"8",
        "patientSafetyMeasure" :"6",
        "pointsInfrastructureFacility" :"8"
    };
    public remark=false;
    
}