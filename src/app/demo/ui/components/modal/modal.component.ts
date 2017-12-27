import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'modal',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./modal.scss')],
    template: require('./modal.html'),
})
export class Modal {
    constructor() { }
}
