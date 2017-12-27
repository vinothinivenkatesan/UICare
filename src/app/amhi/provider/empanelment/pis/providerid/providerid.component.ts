import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'provider-id',
    encapsulation: ViewEncapsulation.None,
    template: require('./providerid.html'),
    styles: [require('./providerid.scss')]
})
export class Providerid {

    constructor() {
        
    }
    public savedObj=[
        {
            name:'name1',
            id:'1238',
        },
        {
            name:'name3',
            id:'1132',
        },
        {
            name:'name5',
            id:'2134',
        }
    ]
    
}