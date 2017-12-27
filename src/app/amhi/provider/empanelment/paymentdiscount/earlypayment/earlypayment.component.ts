import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'early-payment',
    encapsulation: ViewEncapsulation.None,
    template: require('./earlypayment.html')
})
export class Earlypayment {
    public discountApplicableoptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];
    constructor() {
    }

}