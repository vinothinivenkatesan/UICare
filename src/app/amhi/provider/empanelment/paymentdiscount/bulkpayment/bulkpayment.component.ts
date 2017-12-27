import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'bulk-payment',
    encapsulation: ViewEncapsulation.None,
    template: require('./bulkpayment.html')
})
export class Bulkpayment {
    public bulkApplicableoptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];
    constructor() {
    }

}