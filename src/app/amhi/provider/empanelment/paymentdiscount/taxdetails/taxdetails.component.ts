import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'tax-details',
    encapsulation: ViewEncapsulation.None,
    template: require('./taxdetails.html')
})
export class Taxdetails {
    public discountApplicableoptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];
    public tdsRecievedoptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];
    constructor() {
    }

}