import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'corporate-group-details',
    encapsulation: ViewEncapsulation.None,
    template: require('./corporategroupdetails.html'),
    styles: [require('./corporategroupdetails.scss')]
})
export class Corporategroupdetails {

    @Input() formtitle: string;
    @Input() parentObj: any;

    constructor() {

    }


    public corpBlackOptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];

    public corpChequeAddressOptions: any = [{ name: "Administrative", id: "1" }, { name: "Branch", id: "2" }];

    public corpOwneroptions: any = [{ name: "Franchisee", id: "1" }, { name: "Owned by Group", id: "2" }];
    public defaultSelect = '';

   
    getProviderObj() {

    }


}