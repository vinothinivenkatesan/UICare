import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'preferd-benefits',
    encapsulation: ViewEncapsulation.None,
    template: require('./preferdbenefits.html'),
    styles: [require('./preferdbenefits.scss')]
})

export class PreferdBenefitsComponent{
    private freeAgreeList = [];
    private inclusion = [];
    private myDatePickerOptions = {
        
    }
   
    private preferBenObj = {
        toggleValue: "1",
        amhiBenType: "nonpayShare",
        amhiSharePercent: "",
        proSharePercent: "",
        freeAgree: "",
        inclusion: "",
        costBasis: "",
        numOfFree: "",
        costOfService: "",
        discountAge: "",
        discountCeil: "",
        discountEligPerid: "",
        pbRemarks: "",
        discType: "",
        pbStart: "",
        pbEnd: ""
    }

    onToggle($event){

    }
    onDateChanged($event){

    }
    
}
