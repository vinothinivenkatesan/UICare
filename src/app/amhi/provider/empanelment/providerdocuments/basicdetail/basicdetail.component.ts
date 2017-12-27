import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import { IMyOptions } from 'mydatepicker';

@Component({
    selector: 'basic-detail',
    encapsulation: ViewEncapsulation.None,
    template: require('./basicdetail.html'),
    styles: [require('./basicdetail.scss')]
})
/*interface documentMetadataStr{
            "dateOfIssue": null,//"21/02/2017",
            "dataOfExpiry": null,//"09/01/2017",
            "issuingAuthority": null,//"State Board",
            "pancardName": null,
            "documentTitle": null,//"Registration",
            "documents": [],
            "isDeleted":"N"
        };*/
export class Basicdetail implements OnInit{    
    public fileListPIS=[];
    public savedFiles:any=[
    {
        "docName": "AMHIDEVORAPP11000015",
        "docTitle": "3MB File.pdf",
        "docAuthor": "weblogic"
    },
    {
        "docName": "AMHIDEVORAPP11000014",
        "docTitle": "1MB File.pdf",
        "docAuthor": "weblogic"
    }
];
public myEndPoint='/carefileupload/uploadDocument';
private photographTypesList=[{"photographTypeId":5,"photographTypeName":"Front face of the building"},{"photographTypeId":6,"photographTypeName":"Reception of the Provider"},{"photographTypeId":7,"photographTypeName":"Rooms of the provider"},{"photographTypeId":7,"photographTypeName":"Facilities available"}];
private certificateTypesList=[{"certificateTypeId": 8,"certificateTypeName": "ISO"},{"certificateTypeId": 9,"certificateTypeName": "NASAS"}];
private defaultSelect=null;
private selectedPhotographType=this.defaultSelect;
private documentMetadataStr={
            "dateOfIssue": null,//"21/02/2017",
            "dataOfExpiry": null,//"09/01/2017",
            "issuingAuthority": null,//"State Board",
            "pancardName": null,
            "documentTitle": null,//"Registration",
            "documents":[],
            "isDeleted":"N"
        };
private prvInfoSheetUpdate:any;
private prvInfoSheet:any;
private prvRegCertificate:any;
private prvBranches:any;
private prvPhotograph:any;
private photographTypesListObj=[];
private prvTPAList:any;
private currentPhotoDoc:any=[];
private isPhotographDisable:boolean=true;
private providerCode:string="PR001";

private basicDetailsDoc={
    "providerCode": "PR001",
    "documentMetadata": []
}
private errorDefs:any={required:'is not a valid date.'}
myDatePickerOptions: IMyOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd/mm/yyyy',//yyyy-mm-dd',
    markCurrentDay:true,
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    inline: false,/*
    disableUntil: { year: 2016, month: 8, day: 10 },*/
    selectionTxtFontSize: '16px'
};
    /*[
        {
            name:'File Name Manpower.json',
            link:'http://localhost:3001/getmanpower'
        },
        {
            name:'File Name Manpower.json',
            link:'http://localhost:3001/getmanpower'
        },
        {
            name:'File Name Sample.json',
            link:'http://localhost:3001/getsample'
        },
        {
            name:'File Name Sample.json',
            link:'http://localhost:3001/getsample'
        },
    ]*/
    constructor() {
    }
    ngOnInit() {
        this.prvInfoSheetUpdate ={
            "dateOfIssue": null,//"21/02/2017",
            "dataOfExpiry": null,//"09/01/2017",
            "issuingAuthority": null,//"State Board",
            "pancardName": null,
            "documentTitle": null,//"Registration",
            "documents":[],
            "isDeleted":"N"
        };
        this.prvInfoSheet ={
            "dateOfIssue": null,//"21/02/2017",
            "dataOfExpiry": null,//"09/01/2017",
            "issuingAuthority": null,//"State Board",
            "pancardName": null,
            "documentTitle": null,//"Registration",
            "documents":[],
            "isDeleted":"N"
        };
        this.prvRegCertificate ={
            "dateOfIssue": null,//"21/02/2017",
            "dataOfExpiry": null,//"09/01/2017",
            "issuingAuthority": null,//"State Board",
            "pancardName": null,
            "documentTitle": null,//"Registration",
            "documents":[],
            "isDeleted":"N"
        };
        this.prvBranches ={
            "dateOfIssue": null,//"21/02/2017",
            "dataOfExpiry": null,//"09/01/2017",
            "issuingAuthority": null,//"State Board",
            "pancardName": null,
            "documentTitle": null,//"Registration",
            "documents":[],
            "isDeleted":"N"
        };
        this.prvPhotograph ={
            "dateOfIssue": null,//"21/02/2017",
            "dataOfExpiry": null,//"09/01/2017",
            "issuingAuthority": null,//"State Board",
            "pancardName": null,
            "documentTitle": null,//"Registration",
            "documents":[],
            "isDeleted":"N"
        };
        this.prvTPAList ={
            "dateOfIssue": null,//"21/02/2017",
            "dataOfExpiry": null,//"09/01/2017",
            "issuingAuthority": null,//"State Board",
            "pancardName": null,
            "documentTitle": null,//"Registration",
            "documents":[],
            "isDeleted":"N"
        };
        this.constructPhotographTypesObj();
        this.setBusnisseDocType(this.prvInfoSheet,'documentTitle','Provider Information Sheet');
        this.setBusnisseDocType(this.prvRegCertificate,'documentTitle','Provider Registration Certificate');
        this.setBusnisseDocType(this.prvBranches,'documentTitle','List of provider branches');
        this.setBusnisseDocType(this.prvPhotograph,'documentTitle','List of provider branches');
        this.setBusnisseDocType(this.prvTPAList,'documentTitle','TPA List');
    }
    private setBusnisseDocType(obj, toSetProp, value){
        obj[toSetProp]=value;
    }
    private constructPhotographTypesObj(){
        let outer=this;
        this.photographTypesList.forEach(
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
                outer.photographTypesListObj.push(tempObj);
            }
        );
    }
    photographTypeChange(){
        this.isPhotographDisable=true;
        if(this.selectedPhotographType!=this.defaultSelect){
            let outer=this;
            this.photographTypesListObj.find(function(item){
                if(outer.selectedPhotographType==item.documentTitle){
                    outer.currentPhotoDoc=item.documents;
                    outer.isPhotographDisable=false;
                    return true;
                }
            });
        }
    }
    private onDateChanged(event, toSetProp, toSetProp2, model){
        let formattedDate=event.formatted;
        this[toSetProp][toSetProp2]=formattedDate;
        console.log(model);
    }
    private formSave(){
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