import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { ProductdetailsService } from './productdetails.service';
import { IMyOptions, IMyDate } from 'mydatepicker';

@Component({
    selector: 'product-details',
    encapsulation: ViewEncapsulation.None,
    template: require('./productdetails.html'),
    styles: [require('./productdetails.scss')]
})
export class Productdetails {

    public result: any;
    public lobs: any;
    private setupdateModel: Object = { date: { year: 2017, month: 4, day: 6 } };
    private effectivedateModel: Object = { date: { year: 2017, month: 4, day: 6 } };
    private expirydateModel: Object = { date: { year: 2017, month: 4, day: 6 } };
    private selectedExclusionId = null;

    myDatePickerOptions: IMyOptions = {
        selectionTxtFontSize: '13px'
    };
    private exclusionList: any = [
        { id: 1, name: 'Exclusion1' },
        { id: 2, name: 'Exclusion2' },
        { id: 3, name: 'Exclusion3' }
    ];
    private currencyList: any = [
        { id: 1, name: 'Euro' },
        { id: 2, name: 'Dollar' },
        { id: 3, name: 'Rupee' }
    ];


    constructor(private productdetailsService: ProductdetailsService) {
    }

    start() {
        this.loadProduct();
    }

    ngOninit() {
        this.lobs = [
            {
                "lobId": "1",
                "lobName": "Online"
            },
            {
                "lobId": "2",
                "lobName": "Offline"
            },
            {
                "lobId": "3",
                "lobName": "Bank"
            }
        ]


    }

    public loadProduct() {
        this.productdetailsService.getProduct()
            .subscribe(
            results => {
                this.result = results;
                this.lobs = this.result.product;
                console.log(this.result.product);
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            });
    }

    public checkboxModel = [{
        name: "rider",
        checked: false,
        class: 'col-md-4'
    }, {
        name: "master",
        checked: true,
        class: 'col-md-4'
    }];

    public checkboxPropertiesMapping = {
        model: 'checked',
        value: 'name',
        label: 'name',
        bsCheckboxClass: 'class'
    };



}
