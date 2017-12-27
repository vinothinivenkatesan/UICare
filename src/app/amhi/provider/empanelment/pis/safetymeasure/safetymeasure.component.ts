import { Component, ViewEncapsulation} from '@angular/core';
import {IMultiSelectOption,IMultiSelectTexts,IMultiSelectSettings} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

@Component({
    selector: 'safetymeasure',
    encapsulation: ViewEncapsulation.None,
    template: require('./safetymeasure.html'),
    styles: [require('./safetymeasure.scss')]
})
export class Safetymeasure {
    private defaultSelect=null;
    private clinicalPathways=this.defaultSelect;

    private accrediationList= [{"accreditationId": 117,"accreditationName": "CRISIL"},{"accreditationId": 116,"accreditationName": "ICRA"},{"accreditationId": 114,"accreditationName": "ISO"},{"accreditationId": 118,"accreditationName": "JCI"},{"accreditationId": 115,"accreditationName": "NABH"}];
    private patientSafetyMeasureList= [{"patientSafetyMeasureId": 124,
      "patientSafetyMeasureName": "Belonging Safety"},{"patientSafetyMeasureId": 122,"patientSafetyMeasureName": "Bio Safety"},{"patientSafetyMeasureId": 123,"patientSafetyMeasureName": "Fire Safety"},{"patientSafetyMeasureId": 125,"patientSafetyMeasureName": "Radiation Safety"}];
    private teachingCoursesList= [{"teachingCoursesId": 127,"teachingCoursesName": "Clinical Courses for doctors"},{"teachingCoursesId": 130,"teachingCoursesName": "Clinical Research"},{"teachingCoursesId": 128,"teachingCoursesName": "Non-Clinical Courses for doctors"},{"teachingCoursesId": 126,"teachingCoursesName": "Nursing Courses"}];
    private auditsAndTrainingsList= [{"auditsAndTrainingsId": 133,"auditsAndTrainingsName": "Clinical Audits"},{"auditsAndTrainingsId": 134,"auditsAndTrainingsName": "CME"},{"auditsAndTrainingsId": 135,"auditsAndTrainingsName": "Staff Training"}];
    private clinicalPathwaysList= [{"clinicalPathwaysId": 137,"clinicalPathwaysName": "NO"},{"clinicalPathwaysId": 138,"clinicalPathwaysName": "others"},{"clinicalPathwaysId": 136,"clinicalPathwaysName": "YES"}];
    private providerCommitteeList= [{"providerCommitteeId": 142,"providerCommitteeName": "Clinical Research Committee"},{"providerCommitteeId": 140,"providerCommitteeName": "Ethics Committee"},{"providerCommitteeId": 139,"providerCommitteeName": "Infection Control Committee"},{"providerCommitteeId": 143,"providerCommitteeName": "Waste Management Committee"}];
    private providerPolicyList= [{"providerpolicyId": 144,"providerpolicyName": "Infection control policy"},{"providerpolicyId": 145,"providerpolicyName": "Staff vaccination policy"},{"providerpolicyId": 146,"providerpolicyName": "Waste Management policy"}];
    private qualityMaintenanceList= [{"referenceDataId": 710,"referenceTypeValue": "Periodic Quality Assessment"},{"referenceDataId": 711,"referenceTypeValue": "QC Officer"},{"referenceDataId": 709,"referenceTypeValue": "Random sample sharing to other labs"}];
    private patientSafetyGradingParameterList= [{"referenceDataId": 714,"referenceTypeValue": "Bio safety"},{"referenceDataId": 712,"referenceTypeValue": "Fire safety"},{"referenceDataId": 713,"referenceTypeValue": "Laser safety"}];


    public myCoverageList: IMultiSelectOption[] = [
        { id: 1, name: 'Exclusion 1 / Testarea' },
        { id: 2, name: 'Exclusion 2' },
        { id: 3, name: 'Exclusion 3' },
        { id: 4, name: 'Exclusion 4' },
        { id: 5, name: 'Exclusion 5' },
        { id: 6, name: 'Exclusion 6' }
      ];
      public checkedList:any=[{value:'', shortName:'display', name:'Display Me'}];
      public audit=[{shortName:'audits',name:'Clinical audits'}, {shortName:'cme',name:'CME'}, {shortName:'staff',name:'Staff training'}];
      public teaching=[{shortName:'nursing',name:'Nursing courses'}, {shortName:'clinicalDoctor',name:'Clinical courses for doctors'}, {shortName:'nonclinicalDoctor',name:'Non-Clinical courses for doctors'}, {shortName:'clinicalResearch',name:'Clinical research'}];
      public val=['my details', 'custom tag', 'validate'];
    constructor() {
        
    }
    onChange(selected){
        console.log(selected);
    }
    
}