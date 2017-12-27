import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'inputs',
    encapsulation: ViewEncapsulation.None,
    template: require('./inputs.html'),
})
export class Inputs {

    public toggle: any = "Yes";
    public toggleName: any = "Yes";
    public toggleoptions: any = [{id:"Yes", name:"Yes"}, {id:"No", name:"No"}];

    constructor() {
    }
}
