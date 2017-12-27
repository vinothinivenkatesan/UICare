import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'safety-doctor-dental',
    encapsulation: ViewEncapsulation.None,
    template: require('./safetydoctordental.html'),
    styles: [require('./safetydoctordental.scss')]
})
export class Safetydoctordental {

    constructor() {
        
    }
    
    private prvDOCTINDAccred={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    private prvDOCTNONINDAccred={
            "dateOfIssue": null,
            "dataOfExpiry": null,
            "issuingAuthority": null,
            "pancardName": null,
            "documentTitle": null,
            "documents":[],
            "isDeleted":"N"
        };
    private DOCTNONINDAccredTypeList=[
                    {id:1, name:'ISO'},
                    {id:2, name:'NABH'},
                    {id:3, name:'NABL'},
                    {id:4, name:'Others'}
                ];
    private DOCTINDAccredTypeList=[
                    {id:1, name:'ISO'},
                    {id:2, name:'NABH'},
                    {id:3, name:'NABL'},
                    {id:4, name:'Others'}
                ];
    private selectedDOCTNONINDAccredTypeId=null;
    private selectedDOCTINDAccredTypeId=null;
    public selectedDOCTNONINDAccredType=[];
    public selectedDOCTINDAccredType=[];
                
    private multiselectChange(event, genericName){
        this['selected'+this.capitalizeFirstLetter(genericName)]=this._skipId(event,this[genericName+'List']);
        if(this['selected'+this.capitalizeFirstLetter(genericName)+'Id'].length == 0){
            this['selected'+this.capitalizeFirstLetter(genericName)+'Id']=null;
        }
    }
    
    private removeTag(event, genericName){
        let arrayOfId=this._skipName(event,this[genericName+'List']);
        this['selected'+this.capitalizeFirstLetter(genericName)+'Id'] = this['selected'+this.capitalizeFirstLetter(genericName)+'Id'].filter(x => arrayOfId.indexOf(x) < 0 );
        if(this['selected'+this.capitalizeFirstLetter(genericName)+'Id'].length == 0){
            this['selected'+this.capitalizeFirstLetter(genericName)+'Id']=null;
        }
    }
    private _skipName(event:any, multiSelectOption:any[]):any{// get the id from 
        let tempObj=[];
        multiSelectOption.filter(function(item, index, arr){
            if(event.indexOf(item.name)!=-1){
                tempObj.push(item.id);
            }
        });
        return tempObj;
    }
    private _skipId(event:any, multiSelectOption:any[]):any[] {// get the set of names from []of ids
        let tempObj=[];
        multiSelectOption.filter(function(item, index, arr){
            if(event.indexOf(item.id)!=-1){
                tempObj.push(item.name);
            }
        });
        return tempObj;
    }
    private capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
}