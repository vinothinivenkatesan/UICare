import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'administrative-unit-details',
    encapsulation: ViewEncapsulation.None,
    template: require('./administrativeunitdetails.html'),
    styles: [require('./administrativeunitdetails.scss')]
})
export class Administrativeunitdetails {

    @Input() formtitle: string;
    @Input() parentObj: any;
    constructor() {

    }

    public adminUnitoptions: any = [{ name: "Administrative", id: "1" }, { name: "Branch", id: "2" }];

    public adminChequeAddressOptions: any = [{ name: "Administrative", id: "1" }, { name: "Branch", id: "2" }];

    public adminEmpaneloptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];

    public defaultSelect = '';

    public adminUnitObj: any = {
       
    }


}