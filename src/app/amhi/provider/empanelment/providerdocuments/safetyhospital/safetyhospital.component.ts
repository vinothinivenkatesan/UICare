import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'safety-hospital',
    encapsulation: ViewEncapsulation.None,
    template: require('./safetyhospital.html'),
    styles: [require('./safetyhospital.scss')]
})
export class Safetyhospital {

    
    private HSPTLCertTypeListObj=[];
    private HSPTLCertTypeList=[{"photographTypeId":5,"photographTypeName":"Front face of the building"},{"photographTypeId":6,"photographTypeName":"Reception of the Provider"},{"photographTypeId":7,"photographTypeName":"Rooms of the provider"},{"photographTypeId":7,"photographTypeName":"Facilities available"}];
    private defaultSelect=null;
    private selectedHSPTLCertType=this.defaultSelect;
    private currentHSPTLCertDoc:any=[];
    private isHSPTLCertDisable:boolean=true;
    constructor() {
        
    }
    ngOnInit() {
        this.constructPhotographTypesObj();
    }
    private constructPhotographTypesObj(){
        let outer=this;
        this.HSPTLCertTypeList.forEach(
            function(item){
                let tempObj={
                    "dateOfIssue": null,//"21/02/2017",
                    "dataOfExpiry": null,//"09/01/2017",
                    "issuingAuthority": null,//"State Board",
                    "pancardName": null,
                    "documentTitle": null,//"Registration",
                    "documents":[],
                    "isDeleted":"N"
                };
                tempObj.documentTitle=item.photographTypeName;
                outer.HSPTLCertTypeListObj.push(tempObj);
            }
        );
    }
    HSPTLCertTypeChange(){
        this.isHSPTLCertDisable=true;
        if(this.selectedHSPTLCertType!=this.defaultSelect){
            let outer=this;
            this.HSPTLCertTypeListObj.find(function(item){
                if(outer.selectedHSPTLCertType==item.documentTitle){
                    outer.currentHSPTLCertDoc=item.documents;
                    outer.isHSPTLCertDisable=false;
                    return true;
                }
            });
        }
    }
    
    private isFileAdded(savedFileObj){
        let tempFlag=false;
        if(savedFileObj.length>0){
            savedFileObj.find(function(item){if(item.isDeleted=='N'){tempFlag = true; return true;}});
        }
        return tempFlag;
    }    
    private addClass(isDeleted){
        let tempArr=[];
        if(isDeleted=='N'){
            tempArr=['col-sm-2','fileBox'];
        }
        return tempArr;
    }
    private openFile(docName) {
        let URL = 'http://10.252.42.67:8098/CAREBusinessServices/providers/documents/' + docName;
        window.open(URL, '', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    }
    private removeFile(savedFileObj, iter) {
        savedFileObj[iter]["isDeleted"]='Y';
    }
    
}