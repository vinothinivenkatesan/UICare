import { Component, ViewEncapsulation, ViewChild, Input, OnInit } from '@angular/core';


@Component({
    selector: 'custom-crud',
    template: require('./customcrud.html'),
    encapsulation: ViewEncapsulation.None
})
export class Customcrud implements OnInit {
    @Input() heading: String;
    @Input() serviceUrl: String;
    @Input() savedObj: any;
    @Input() activeObj: any;

    public edit: number = -1;
    public details: any = [];
    public result: any;
    constructor() {
    }

    ngOnInit() {
    }
    addData(obj) {
        if (this.edit != -1) {
            this.savedObj[this.edit].name = obj.name;
            this.savedObj[this.edit].number = obj.number;
            this.savedObj[this.edit].email = obj.email;
            obj.name = '';
            obj.number = '';
            obj.email = '';
            this.edit = -1;
        }
        else if (obj.name != '' && obj.number != '' && obj.email != '') {

            let ob: any = {};
            ob.name = obj.name;
            ob.number = obj.number;
            ob.email = obj.email;
            this.savedObj.push({ 'name': obj.name, 'number': obj.number, 'email': obj.email });
            obj.name = '';
            obj.number = '';
            obj.email = '';
        } else {
            alert('please enter all the fields');
        }
    }
    editDetail(iter, parentObj, obj) {
        this.edit = iter;
        obj.name = parentObj[iter].name;
        obj.number = parentObj[iter].number;
        obj.email = parentObj[iter].email;
    }
    deleteDetail(iter, parentObj) {
        parentObj.splice(iter, 1);
        this.edit=-1;
    }

}
