import { Component, ViewEncapsulation,Input } from '@angular/core';

@Component({
    selector: 'relation-ship',
    encapsulation: ViewEncapsulation.None,
    template: require('./relationship.html')
})
export class Relationship {
    @Input() formTitle: String;
    constructor() {
    }   
    
    items = ['Pizza', 'Pasta', 'Parmesan'];
}