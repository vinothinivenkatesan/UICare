import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'costsharing-details',
    encapsulation: ViewEncapsulation.None,
    template: require('./costsharingdetails.html'),
    styles: [require('./costsharingdetails.scss')]
})
export class Costsharingdetails {

    public defaultSelect:string="";

    constructor() {
    }
}