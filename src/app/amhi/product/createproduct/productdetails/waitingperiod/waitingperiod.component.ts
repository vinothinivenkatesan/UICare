import { Component, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'waiting-period',
    encapsulation: ViewEncapsulation.None,
    template: require('./waitingperiod.html')
})
export class Waitingperiod {

    @Input() formTitle: String;
    @Input() heading: String;
    @Input() serviceUrl: String;
    @Input() savedObj: any;
    @Input() activeObj: any;

    public edit: number = -1;
    public details: any = [];
    public result: any;

    constructor() {
        this.savedObj = [];
        this.activeObj = {
            exclusiontype: 'individual',
            periodcount: '',
            period: 'days',
            exclusionname: 'ICICI',
            exclusiongrouping: 'ICICI'
        };

    }

    closeResult: string;

    addData(obj) {
        if (this.edit != -1) {
            this.savedObj[this.edit].exclusiontype = obj.exclusiontype;
            this.savedObj[this.edit].periodcount = obj.periodcount;
            this.savedObj[this.edit].period = obj.period;
            this.savedObj[this.edit].exclusionname = obj.exclusionname;
            this.savedObj[this.edit].exclusiongrouping = obj.exclusiongrouping;
            obj.exclusiontype = 'individual';
            obj.periodcount = '';
            obj.period = 'days';
            obj.exclusionname = 'ICICI';
            obj.exclusiongrouping = 'ICICI';
            this.edit = -1;
        }
        else if (obj.exclusiontype != '' && obj.periodcount != '' && obj.period != '' && obj.exclusionname != '' && obj.exclusiongrouping != '') {

            let ob: any = {};
            ob.exclusiontype = obj.exclusiontype;
            ob.periodcount = obj.periodcount;
            ob.period = obj.period;
            ob.exclusionname = obj.exclusionname;
            ob.exclusiongrouping = obj.exclusiongrouping;
            this.savedObj.push({ 'exclusiontype': obj.exclusiontype, 'periodcount': obj.periodcount, 'period': obj.period, 'exclusionname': obj.exclusionname, 'exclusiongrouping': obj.exclusiongrouping });
            obj.exclusiontype = 'individual';
            obj.periodcount = '';
            obj.period = 'days';
            obj.exclusionname = 'ICICI';
            obj.exclusiongrouping = 'ICICI';
        }
        else {
            alert('please enter all the fields');
        }
    }
    editDetail(iter, parentObj, obj) {
        this.edit = iter;
        obj.exclusiontype = parentObj[iter].exclusiontype;
        obj.periodcount = parentObj[iter].periodcount;
        obj.period = parentObj[iter].period;
        obj.exclusionname = parentObj[iter].exclusionname;
        obj.exclusiongrouping = parentObj[iter].exclusiongrouping;
    }
    deleteDetail(iter, parentObj) {
        parentObj.splice(iter, 1);
        this.edit = -1;
    }

}