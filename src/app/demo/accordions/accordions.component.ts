import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'accordions',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./accordions.scss')],
    template: require('./accordions.html')
})
export class Accordions {
    public oneAtATime: boolean = true;
    constructor() { }

}
