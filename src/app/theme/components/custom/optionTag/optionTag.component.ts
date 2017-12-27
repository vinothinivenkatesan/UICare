import { Component, ViewEncapsulation, ViewChild, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'option-tag',
  styles: [require('./optionTag.scss')],
  template: require('./optionTag.html'),
  encapsulation: ViewEncapsulation.None
})
export class OptionTag{
    /*@Input() savedFile:any;
    @Input() endPoint:any;*/
    @Input() tagList:any;
    @Input() readonly:any=false;
    @Input() templateDetail:any;
    @Input() preferedTag:any;
    @Output() verify:EventEmitter<any>=new EventEmitter();
    @Output() resend:EventEmitter<any>=new EventEmitter();
    @Output() onRemove:EventEmitter<any>=new EventEmitter();
    @Output() onSelect:EventEmitter<any>=new EventEmitter();
    /*
    templateDetail={type:'', name:''}
    name:-
    unique name for the input group
    type 1:-(AKA)
    preferedObj ={value:''}matches the value from tagList array of object
    type 2:-(icon)
    preferedObj ={value:index}index of the object in the array [object:tagList]
    type 3:-(OTP)
    preferedObj ={value:string'', OTP:numeric'', verified:boolean''}
    */
    public tagLists:any=['Name1 User','Solo','Ram Kumar'];
    //public tagLists:any=[{value:'Name1 User',display:'Name1 User'},{value:'Solo',display:'Solo'},{value:'Ram Kumar',display:'Ram Kumar'}];
    public filelist:any;
    
    constructor() {
        let outer=this;
    }
    public removeTagItem(iter){
        this.onRemove.emit(this.tagList[iter]);
        this.tagList.splice(iter,1);
    }
    public onCheck(obj){
        console.log(obj);
        this.onSelect.emit(obj);
    }
    public sendOTP(obj){
        console.log(obj);
        this.resend.emit(obj);
    }
    public checkOTP(obj){
        console.log(obj);
        if(obj.OTP != ''){            
            this.verify.emit(obj);
        }
        else{
            alert("enter otp to verify");
        }
    }

}