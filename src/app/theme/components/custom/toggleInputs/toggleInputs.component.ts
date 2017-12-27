import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'toggle-input',
    template: require('./toggleInputs.html')
})

export class ToggleInputs implements OnInit{

    @Input() toggleName: string;
    @Input() toggle: any;
    @Input() toggleoptions: string[];
    @Input() togglevalue: string[];
    @Input() toggleDisabled: any;
    @Output() onToggle:EventEmitter<any>=new EventEmitter();
    @Output() toggleModel:EventEmitter<any>=new EventEmitter();
    public valueSetFlag=false;
    ngOnInit() {
        if(this.togglevalue){}
        else{
            this.togglevalue=this.toggleoptions;
        }
    }
    public setToggle(option) {
        if(this.toggleDisabled)
        {
            return false;
        }
        this.toggle = option.id;
        this.onToggle.emit(option.id);
    }
    public setToggleModel(val){
        this.toggleModel.emit(val);
    }

}

