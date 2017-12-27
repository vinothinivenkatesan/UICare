import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'coverage-details',
    encapsulation: ViewEncapsulation.None,
    template: require('./coveragedetails.html'),
    styles: [require('./coveragedetails.scss')]
})
export class Coveragedetails {

    public defaultSelect:string="";

    constructor() {
    }
}