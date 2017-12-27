import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'max-si',
    encapsulation: ViewEncapsulation.None,
    template: require('./maxSI.html')
})
export class MaxSI {

    @Input() formTitle: String;
    @Input() buttonName: string;
    public network = [
        { value: 'network', display: 'Network' },
        { value: 'non-network', display: 'Non network' }
    ];
    
    
    constructor() {
    }
}