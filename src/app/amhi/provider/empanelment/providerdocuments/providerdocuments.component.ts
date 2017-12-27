import { Component, ViewEncapsulation, Input, OnInit} from '@angular/core';
import {ProviderdocumentsService} from './providerdocuments.service'

@Component({
    selector: 'provider-documents',
    encapsulation: ViewEncapsulation.None,
    template: require('./providerdocuments.html'),
    styles: [require('./providerdocuments.scss')]
})
export class Providerdocuments implements OnInit{
    constructor(_documentService:ProviderdocumentsService) {
        console.log(_documentService);
    }
    ngOnInit(){
        this.getProviderDocuments();
    }
    public remark=false;
    private activeAcordian='1';
    private prvDocActionList=[];
    private remarksList=[];
    private defaultSelect=null;
    private checkerAction={actionTakenId:this.defaultSelect};
    private getProviderDocuments(){
    }
}