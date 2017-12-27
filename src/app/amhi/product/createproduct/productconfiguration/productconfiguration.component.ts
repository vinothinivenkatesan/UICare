import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'product-configuration',
    encapsulation: ViewEncapsulation.None,
    template: require('./productconfiguration.html'),
    styles: [require('./productconfiguration.scss')]
})
export class Productconfiguration {

    constructor() {
    }

    public oneAtATime: boolean = true;
    private documents:any=[];

}
