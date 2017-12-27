import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'tariff-mapping',
    encapsulation: ViewEncapsulation.None,
    template: require('./tariffmapping.html'),
    styles: [require('./tariffmapping.scss')]
})
export class Tariffmapping {

    constructor() {
        
    }
    private activeAcordian='1';
    private setActiveAccordian(val){//identify the active accordian(open state) and set the active value
        this.activeAcordian='';
        if(val.nextState){//check if open
            this.activeAcordian=val.panelId;// set active accordian id
        }
    }
    
}