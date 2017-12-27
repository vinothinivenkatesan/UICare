import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'empanelment',
    encapsulation: ViewEncapsulation.None,
    template: require('./empanelment.html'),
    styles: [require('./empanelment.scss')]
})
export class Empanelment {

    constructor() {
        
    }
    
}