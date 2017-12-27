import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'template-types',
    encapsulation: ViewEncapsulation.None,
    styles: [],
    template: require('./templatetypes.html'),
})
export class Templatetypes {
    public sampleVal1='';
    public sampleVal2='';
    public sampleVal3='';
    public sampleVal4='';
    public sampleVal5='';
    public sampleVal6='';

    constructor(){}
}