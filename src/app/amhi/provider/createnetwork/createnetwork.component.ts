import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'create-network',
    encapsulation: ViewEncapsulation.None,
    template: require('./createnetwork.html'),
    styles: [require('./createnetwork.scss')]
})

export class Createnetwork {
    private largeModal: any;
    private providerOptions:any=[{'id':1,'name':'Provider'},{'id':2,'name':'Group'}]

    private assignModal(modal) {
        this.largeModal = modal;
    }
    
    
}