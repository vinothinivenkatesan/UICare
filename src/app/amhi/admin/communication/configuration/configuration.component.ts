import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'configuration',
    encapsulation: ViewEncapsulation.None,
    template: require('./configuration.html'),
    styles: [require('./configuration.scss')]
})
export class Configuration {
    private isInactiveMaker: boolean = false;
    private isOnprogressMaker: boolean = false;
    private isCompletedMaker: boolean = false;
    private isInactiveChecker: boolean = false;
    private isOnprogressChecker: boolean = false;
    private isCompletedChecker: boolean = false;
    private defaultSelect = null;
    private commEvent=this.defaultSelect;
    private commMode=this.defaultSelect;
    private checkerAction=this.defaultSelect;
    private selectedState=this.defaultSelect;
    private selectedCity=this.defaultSelect;
    private commConfig: any = {documents:[]};
    private providerCode: any = '';
    private peopleTableData:Array<any> =[{id:1,firstName:'Rahul',lastName:'doctor','username':'chennai'}];
    private acTypeList = [
        { value: 'Savings', display: 'Savings' },
        { value: 'Current', display: 'Current' },
        { value: 'NRO', display: 'NRO' },
        { value: 'NRE', display: 'NRE' },
        { value: 'FCNR', display: 'FCNR' }
    ];

    constructor() {
        
    }
    
}