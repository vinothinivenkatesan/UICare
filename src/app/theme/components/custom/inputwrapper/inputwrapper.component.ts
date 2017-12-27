import {Component, ViewEncapsulation, ViewChild, Input, OnChanges} from '@angular/core';
import { MessageConstants } from '../../../../amhi/global/messageConstants';

@Component({
    selector: 'input-wrapper',
    styles: [require('./inputwrapper.scss')],
    template: require('./inputwrapper.html'),
    encapsulation: ViewEncapsulation.None
})
export class Inputwrapper/* implements OnChanges*/ {

    @Input() templateType:any;
    @Input() formErrors:any;
    @Input() inputLabel:string = '';
    @Input() shortLabel:string = '';
    @Input() betweenText:string = '';

    @Input() inputErrors:any;
    @Input() inputErrorsTwo:any;
    
    @Input() errorDefs:any={
        required:this.messageConstants.ErrorCode.MSG_01,
        number:this.messageConstants.ErrorCode.MSG_02,
        email:this.messageConstants.ErrorCode.MSG_03,
        emailPattern:this.messageConstants.ErrorCode.MSG_03,
        url:this.messageConstants.ErrorCode.MSG_04,
        pattern:this.messageConstants.ErrorCode.MSG_05,
        minlength:this.messageConstants.ErrorCode.MSG_06,
        maxlength:this.messageConstants.ErrorCode.MSG_07,
        min:this.messageConstants.ErrorCode.MSG_08,
        max:this.messageConstants.ErrorCode.MSG_09,
        rangeLength:this.messageConstants.ErrorCode.MSG_10,
        inputAddon:this.messageConstants.ErrorCode.MSG_20
    };
    @Input() errorDefsTwo:any={
        required:this.messageConstants.ErrorCode.MSG_01,
        number:this.messageConstants.ErrorCode.MSG_02,
        email:this.messageConstants.ErrorCode.MSG_03,
        emailPattern:this.messageConstants.ErrorCode.MSG_03,
        url:this.messageConstants.ErrorCode.MSG_04,
        pattern:this.messageConstants.ErrorCode.MSG_05,
        minlength:this.messageConstants.ErrorCode.MSG_06,
        maxlength:this.messageConstants.ErrorCode.MSG_07,
        min:this.messageConstants.ErrorCode.MSG_08,
        max:this.messageConstants.ErrorCode.MSG_09,
        rangeLength:this.messageConstants.ErrorCode.MSG_10,
        inputAddon:this.messageConstants.ErrorCode.MSG_20
    };
    /*public r={
        min:'minmum length is required',
        required:'is required.'
    }*/
    constructor(private messageConstants: MessageConstants) {
    }
    errorMessage:string = ''
    public isError=false;
    private required=false;
    changed(){
        console.log(this.inputErrors);
        console.log(this.formErrors);
        var errors:any = this.inputErrors.errors;
        this.errorMessage = '';
        if (errors) {
            this.isError=false;
            Object.keys(this.errorDefs).some(key => {
                if (errors[key]) {
                    this.errorMessage = this.inputLabel+' '+this.errorDefs[key];
                    this.isError=true;
                    return true;
                }
            });
        }
    }
    errorMsg(){
        this.multipleInput();
        return this.errorMessage;
    }
    isRequired(){
        //let isRequired=false;
        if(this.shortLabel!=''){
            if(this.shortLabel.lastIndexOf("*")==(this.shortLabel.length-1))
            {
                this.shortLabel=this.shortLabel.slice(0,(this.shortLabel.length-1));
                this.required=true;
            }
        }
        else if(this.inputLabel!=''){
            if(this.inputLabel.lastIndexOf("*")==(this.inputLabel.length-1))
            {
                this.inputLabel=this.inputLabel.slice(0,(this.inputLabel.length-1));
                this.required=true;
            }
        }
        return this.required;
    }

    multipleInput(){
        //console.log(this.inputErrors);
        //console.log(this.formErrors);
        let errors:any = this.inputErrors.errors;
        let errors2:any =false;
        if(this.inputErrorsTwo){
            errors2 = this.inputErrorsTwo.errors;
        }
        this.errorMessage = '';
        if (errors) {
            this.isError=false;
            Object.keys(this.errorDefs).some(key => {
                if (errors[key]) {
                    if(key=='required'){
                        this.errorMessage = this.inputLabel+' '+this.errorDefs[key];
                    }else if(key=='inputAddon'){
                        this.errorMessage = this.errorDefs[key];
                    }else{
                        this.errorMessage =this.inputErrors.value+' '+this.errorDefs[key];
                    }
                    this.isError=true;
                    return true;
                }
            });
        }
        else if(errors2){
            this.isError=false;
            Object.keys(this.errorDefsTwo).some(key => {
                if (errors2[key]) {
                    if(key=='required'){
                        this.errorMessage = this.inputLabel+' '+this.errorDefs[key];
                    }else if(key=='inputAddon'){
                        this.errorMessage = this.errorDefs[key];
                    }else{
                        this.errorMessage =this.inputErrors.value+' '+this.errorDefs[key];
                    }
                    this.isError=true;
                    return true;
                }
            });
        }
    }


    /*ngOnChanges(changes:any):void {
        //debugger;
        //console.log(changes);
        var errors:any = changes.inputErrors.currentValue.errors;
        this.errorMessage = '';
        if (errors) {
            Object.keys(this.errorDefs).some(key => {
                if (errors[key]) {
                    this.errorMessage = this.inputLabel+' '+this.errorDefs[key];
                    return true;
                }
            });
        }
    }*/
}