import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'payment-discount',
    encapsulation: ViewEncapsulation.None,
    template: require('./paymentdiscount.html'),
    styles: [require('./paymentdiscount.scss')]
})
export class Paymentdiscount {
    public oneAtATime: boolean = true;    
    public advanceApplicableoptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];
    public paymentApplicableoptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];
    public taxApplicableoptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];
    public savedFiles:any=[];
    
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