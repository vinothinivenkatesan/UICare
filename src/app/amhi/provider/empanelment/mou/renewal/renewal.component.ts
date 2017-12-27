import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'renewal',
    encapsulation: ViewEncapsulation.None,
    template: require('./renewal.html')
})
export class Renewal {
    
    private savedFiles:any=[];
    public autoRenewaloptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];

    constructor() {
        
    }
    
}