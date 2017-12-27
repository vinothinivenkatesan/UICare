import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'bank',
    encapsulation: ViewEncapsulation.None,
    template: require('./bank.html'),
    styles: [require('./bank.scss')]
})
export class Bank {
    private savedFiles:any=[];
    public bankGuaranteeoptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];
    public bankDepositoptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];
    constructor() {
        
    }
    
}