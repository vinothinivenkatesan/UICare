import { Component, Input } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';


const URL = 'http://10.24.142.53:8080';

@Component({
    selector: 'upload-inputs',
    template: require('./uploadInputs.html'),
})

export class UploadInputs {
    @Input() savedFile: any;
    @Input() endPoint: any;
    public filelist: any;
    public myUrl = URL + '' + this.endPoint;
    public uploader: FileUploader = new FileUploader({ url: this.myUrl });
    constructor() {
        let outer = this;
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            console.log(outer.savedFile);
        };
    }

    public myUpload() {
        this.filelist = this.uploader;
        this.uploader.setOptions({ url: URL + '' + this.endPoint });
        console.log(this.uploader);
        this.uploader.uploadAll();
    }
    public removeFile(iter) {
        this.savedFile.splice(iter, 1);
    }
}
