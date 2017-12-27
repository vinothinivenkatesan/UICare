import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'tariff-compare',
    encapsulation: ViewEncapsulation.None,
    template: require('./tariffcompare.html'),
    styles: [require('./tariffcompare.scss')]
})

export class TariffCompare{
    private compareSelectList = [
        {id:1, value:"Peer Comparison"},
        {id:2, value:"Reimbursement claims"},
        {id:3, value:"Cashless claims"},
        {id:4, value:"Active tariff"}
    ];
    private actiontakenList = [];
    private uploadFile = [];

    private tariffObj = {
        compareSelect: "",
        providerSelect: "",
        versionSelect: "",
        itemSelect: "",
        actiontaken: "",
        remarks: ""
    }
    private searchObj = {
        searhNetID: ""
    }
    lookUpClosed(){

    }
}