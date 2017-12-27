import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'createproduct',
    encapsulation: ViewEncapsulation.None,
    template: require('./createproduct.html'),
    styles: [require('./createproduct.scss')]
})
export class Createproduct {
    public oneAtATime: boolean = true;
    private isInactiveMaker: boolean = false;
    private isOnprogressMaker: boolean = true;
    private isCompletedMaker: boolean = false;
    private isInactiveChecker: boolean = true;
    private isOnprogressChecker: boolean = false;
    private isCompletedChecker: boolean = false;
    private isInactiveApprover: boolean = true;
    private isOnprogressApprover: boolean = false;
    private isCompletedApprover: boolean = false;
    constructor() {
    }

    clicked(count: any) {
        console.log(count);
    }



}
