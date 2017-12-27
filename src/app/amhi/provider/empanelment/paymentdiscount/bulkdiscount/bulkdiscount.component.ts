import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'bulk-discount',
    encapsulation: ViewEncapsulation.None,
    template: require('./bulkdiscount.html')
})
export class Bulkdiscount {
    public bulkApplicableoptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];
    constructor() {
    }

}