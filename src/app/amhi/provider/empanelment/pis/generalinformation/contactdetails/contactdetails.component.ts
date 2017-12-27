import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'contact-details',
    encapsulation: ViewEncapsulation.None,
    template: require('./contactdetails.html'),
    styles: [require('./contactdetails.scss')]
})
export class Contactdetails {
    @Input() formtitle: string;
    @Input() parentObj: any;
    constructor() {

    }

}