import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'checker',
    encapsulation: ViewEncapsulation.None,
    template: require('./checker'),
    styles: [require('./checker')]
})
export class Checker {

    constructor() {
        
    }
    
}