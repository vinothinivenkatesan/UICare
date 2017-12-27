import { Component, ViewEncapsulation, ViewChild, Input, OnInit } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

//const URL = /*'http://localhost:3002/api';*/'http://10.24.142.53:8080';// http://localhost:8087/WCC-POC/viewdocument';
const URL = 'http://10.24.142.53:8080CAREBusinessServices/';


@Component({
    selector: 'uploader',
    styles: [require('./uploader.scss')],
    template: require('./uploader.html'),
    encapsulation: ViewEncapsulation.None
})
export class Uploader implements OnInit{
    @Input() savedFile: any;
    @Input() endPoint: any;
    @Input() docBusinessType: any='Uploaded Files';
    @Input() providerCode: any='';
    @Input() isUploadShow: any=true;
    @Input() labelText: string='';

    /*custom Modal*/
    private alertNotifyModal: any;
    private confirmNotifyModal: any;
    private notifyHeader = 'Notification';
    private notifyBody = 'Notification content';
    private notifyType2 = 'confirm';
    private notifyName = 'alert';
    private notifyBtn1 = 'Close';
    private notifyBtn2 = 'Ok';

    private required = false;

    private uploaderQueueIndex =[];
    private savedFileIndex =[];

    private filelist: any;
    //private myUrl = 'http://10.242.108.5:8090/CAREBusinessServices/providers/documents';//URL + '' + this.endPoint;
    //private myUrl = 'http://10.252.42.67:8098/CAREBusinessServices/providers/documents';//URL + '' + this.endPoint;
    private myUrl = 'http://10.24.142.53:8080/CAREBusinessServices/providers/documents';//URL + '' + this.endPoint;
    private uploader: uploadExtented = new uploadExtented({ /*allowedFileType: ["image", "pdf", "xls"],*/removeAfterUpload:true, url: this.myUrl, itemAlias:'document', maxFileSize:15728640 });
    constructor() {
        let outer = this;
/*this function is called once all the multiple files are added to the queue*/
        this.uploader.onAfterAddingAll  =   (addedFileItem)=>{
            console.log(addedFileItem);
            outer.uploaderQueueIndex=[];
            outer.savedFileIndex=[];
            for(let i=0; i<outer.uploader.queue.length; i++){
                outer.savedFile.forEach(function(item, index, arr){
                    if(item.isDeleted=='N'){
                        if(outer.uploader.queue[i]._file.name == item.documentName){
                            outer.uploaderQueueIndex.push(i);
                            outer.savedFileIndex.push(index);
                        }
                    }
                });
            }
            if(outer.uploaderQueueIndex.length>0){ 
                outer.notifyBody = "Document already exit in care UI system. Do you want to overwrite the document?";
                outer.notifyName = "Overwrite Document";
                outer.notifyBtn1 = 'No';
                outer.notifyBtn2 = 'Yes';
                outer.confirmNotifyModal.open();
            }
            /*if (this.target){
                console.log(this.target);
                this.target.value = '';
            }*/
        }
        this.uploader.onBuildItemForm  =   (item, form)=>{
            console.log(item);
            console.log(form);
        }
/*this function is called once each file is added to the queue*/
        this.uploader.onAfterAddingFile  =   (item)=>{
            console.log(item);
        }
/*this function is called if any file fails to be added to the queue*/
        this.uploader.onWhenAddingFileFailed  =   (item, filter, option)=>{
            console.log(item);
            console.log(filter);
            console.log(option);
        }
/*this function is called once each file upload event is complete*/
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            /*var responsePath = JSON.parse(response);
            console.log(response);// the url will be in the response
            console.log(item);
            console.log(status);
            console.log(headers);
            for(let i=0; i<responsePath.length;i++){
            outer.savedFile.push(responsePath[i]);
            }*/
            //outer.savedFile.concat(JSON.parse(response));
            if(item.isSuccess){
                let obj={};
                obj["documentId"]=response;
                obj["documentName"]=item._file.name;
                obj["isDeleted"]='N';
                outer.savedFile.push(obj);
                console.log(outer.savedFile);
            }else if (item.isError){
                alert("Server Error on uploading file.");
            }
        };
    }
    private fileInput(fileUploader){
        fileUploader.value='';
        console.log(fileUploader);
    }
    private modalClosed(eventObj) {
        if (eventObj.purpose == "Overwrite Document") {
            if (eventObj.closedBy == 'No') {
                this.removeBrowseFile();
            }
            else if(eventObj.closedBy == 'Yes'){
                this.removeUploadedFile();
            }
        }
    }
    private removeBrowseFile(){
        for(let i=(this.uploaderQueueIndex.length-1);0<=i; i--){
            this.uploader.queue[this.uploaderQueueIndex[i]].remove();
            //this.uploader.queue.splice(this.uploaderQueueIndex[i],1);//[this.uploaderQueueIndex[i]].remove();
        }
        console.log(this.uploader.queue);
    }
    private removeUploadedFile(){
        let outer=this;
        this.savedFileIndex.forEach(function(item){outer.removeFile(outer.savedFile, item);});
    }
    private addClass(isDeleted){
        let tempArr=[];
        if(isDeleted=='N'){
            tempArr=['col-sm-2','fileBox'];
        }
        return tempArr;
    }
    ngOnInit() {
        this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
            console.log(fileItem);
            console.log(form);
            //form.append('document', this.uploader.queue[0]._file);
            form.append('documentTitle', this.docBusinessType);
            form.append('providerCode', this.providerCode);
            /*form.append('documentTitle', this.uploader.queue[0]._file.name);
            form.append('documentType', this.docBusinessType);*/
        //form.append('someField2': this.someValue2);
        };
    }
    private isFileAdded(savedFileObj){
        let tempFlag=false;
        if(savedFileObj.length>0){
            savedFileObj.find(function(item){if(item.isDeleted=='N'){tempFlag = true; return true;}});
        }
        return tempFlag;
    }
    private myUpload() {
        this.filelist = this.uploader;
        this.uploader.setHeader('X-Custom-Header','http://host.com');
        this.uploader.setOptions({ url: 'http://10.24.142.53:8080/CAREBusinessServices/providers/documents' });
        this.uploader.uploadAll();
    }
    private removeFile(savedFileObj, iter) {
        savedFileObj[iter]["isDeleted"]='Y';
    }
    private fileChange(event){
        console.log(event);
    }

    private openFile(docName) {
        let URL = 'http://10.252.42.67:8098/CAREBusinessServices/providers/documents/' + docName;
        window.open(URL, '', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    }
    private assingConfirmNotifyModal(modal) {
        this.confirmNotifyModal = modal;
    }
    isRequired(){
        //let required=false;
        if(this.labelText!=''){
            if(this.labelText.lastIndexOf("*")==(this.labelText.length-1))
            {
                this.labelText=this.labelText.slice(0,(this.labelText.length-1));
                this.required=true;
            }
        }
        return this.required;
    }

}
export class uploadExtented extends FileUploader{
    public setHeader(headerName: string, value: string) {
        if (!this.options.headers) {
        this.options.headers = [];
        }
        let header: any = { 'name': headerName, 'value': value };
        this.options.headers.push(header);
    }
}