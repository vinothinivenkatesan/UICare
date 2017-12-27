import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'detail',
    encapsulation: ViewEncapsulation.None,
    template: require('./detail.html')
})
export class Detail {
    private signingDateModel: Object = { date: { year: 2017, month: 4, day: 6 } };
    private rateStartdateModel: Object = { date: { year: 2017, month: 4, day: 6 } };
    private rateEnddateModel: Object = { date: { year: 2017, month: 4, day: 6 } };
    private mouStartdateModel: Object = { date: { year: 2017, month: 4, day: 6 } };
    private mouEnddateModel: Object = { date: { year: 2017, month: 4, day: 6 } };
    private mouReleasedateModel: Object = { date: { year: 2017, month: 4, day: 6 } };
    constructor() {
        
    }
    
}