import { Injectable } from '@angular/core';

@Injectable()
export class AuthConstants {
    public root_path: string;
    public Mnemonic: any;
    public SCREEN= {
            NAME_01: 'Dashboard',
            NAME_02: 'Product',
            NAME_03: 'Provider',
            NAME_04: 'Claims',
            NAME_05: 'PreAuth',
            NAME_06: 'Network Provider'
    }
    public TAB= {
            NAME_01: 'PIS',
            NAME_02: 'Provider Documents',
            NAME_03: 'Scoring and Grading',
            NAME_04: 'Tariff Mapping',
            NAME_05: 'Payment and Discount',
            NAME_06: 'MOU'
    }
    public ACCORDION= {
            NAME_01: 'General Information',
            NAME_02: 'Services and Clinical Speciality',
            NAME_03: 'Manpower/Staffing',
            NAME_04: 'Patient Safety Measure',
            NAME_05: 'Infrastructure',
            NAME_06: 'Provider Id',
            NAME_07: 'Financial'
    }
    constructor() {
        
    }
}