import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'provider-comparison',
    encapsulation: ViewEncapsulation.None,
    template: require('./providercomparison.html'),
    styles: [require('./providercomparison.scss')]
})
export class Providercomparison {

    constructor() {
        
    }
    
}