import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mou',
    encapsulation: ViewEncapsulation.None,
    template: require('./mou.html'),
    styles: [require('./mou.scss')]
})
export class Mou {
     public oneAtATime: boolean = true; 
     public remark=false;    
    constructor() {
        
    }
  
    
}