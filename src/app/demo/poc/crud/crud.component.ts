import { Component, ViewEncapsulation, ViewChild, Input, OnInit } from '@angular/core';

@Component({
    selector: 'crud',
    template: require('./crud.html'),
    encapsulation: ViewEncapsulation.None
})
export class Crud implements OnInit {
    public heading: String;
    public serviceUrl: String;
    public savedObj: any;
    public activeObj: any;
    public item: any;
    constructor() {
    }

    ngOnInit() {
        this.heading = 'User Details';
        this.item = {
            title: 'Head of the Provider',
            url: 'getmanpower',
            myObj: [],
            inputs: {
                name: 'my name',
                number: '',
                email: ''
            }
        };
    }
}