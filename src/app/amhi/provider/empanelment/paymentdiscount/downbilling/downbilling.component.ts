import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'down-billing',
    encapsulation: ViewEncapsulation.None,
    template: require('./downbilling.html')
})
export class Downbilling {
    public downBillingoptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];
    constructor() {
    }

}