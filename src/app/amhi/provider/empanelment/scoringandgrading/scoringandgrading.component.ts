import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'scoring-and-grading',
    encapsulation: ViewEncapsulation.None,
    template: require('./scoringandgrading.html'),
    styles: [require('./scoringandgrading.scss')]
})
export class Scoringandgrading {

    constructor() {        
    }
     public oneAtATime: boolean = true;
}