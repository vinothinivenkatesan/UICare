import { Component, ViewEncapsulation, ViewChild, Input, OnInit } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://10.24.142.53:8080';


@Component({
    selector: 'docUploader',
    styles: [require('./docUploader.scss')],
    template: require('./docUploader.html'),
    encapsulation: ViewEncapsulation.None
})
export class DocUploader {
    @Input() savedFile: any;
    @Input() endPoint: any;
    public filelist: any;
    public myUrl = URL + '' + this.endPoint;
    public uploader: FileUploader = new FileUploader({ url: this.myUrl });
    constructor() {
        let outer = this;
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
            //debugger;
            console.log(outer.savedFile);
        };
    }
    /*public savedFile:any=[
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
    public myUpload() {
        this.filelist = this.uploader;
        //this.uploader.options.url+=this.endPoint;
        this.uploader.setOptions({ url: URL + '' + this.endPoint });
        console.log(this.uploader);
        this.uploader.uploadAll();
        //this.uploader.clearQueue();
    }
    public removeFile(iter) {
        this.savedFile.splice(iter, 1);
    }

}