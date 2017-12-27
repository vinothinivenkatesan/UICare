import { Component, ViewEncapsulation,Input } from '@angular/core';

@Component({
    selector: 'late-payment',
    encapsulation: ViewEncapsulation.None,
    template: require('./latepayment.html')
})
export class Latepayment {
    public penaltyApplicableoptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];
    constructor() {
    }   
    
    items = ['Pizza', 'Pasta', 'Parmesan'];
}