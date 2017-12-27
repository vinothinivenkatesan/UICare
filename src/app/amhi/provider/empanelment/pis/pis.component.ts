import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'pis',
    encapsulation: ViewEncapsulation.None,
    template: require('./pis.html'),
    styles: [require('./pis.scss')]
})
export class Pis {

    constructor() {
        
    }
    private oneAtATime: boolean = true;
    private remark=false;    
    private pisObj={documents:[]};    
    private chkPisActionList=[{value:'Approved', display: 'Approved'},{value:'Sent Back', display: 'Sent Back'},{value:'Send for Exception Approval', display: 'Send for Exception Approval'}];    
}