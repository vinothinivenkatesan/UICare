import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'input-validate',
    encapsulation: ViewEncapsulation.None,
    styles: [],
    template: require('./inputvalidate.html'),
})
export class Inputvalidate {
    constructor(){}
    public customError:any={
        required:'is required.'
    }
}