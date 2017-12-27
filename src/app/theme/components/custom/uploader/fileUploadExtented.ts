import { Component, ViewEncapsulation, ViewChild, Input, OnInit } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

export class fileUploadExtented extends FileUploader{
    public setHeader(headerName: string, value: string) {
        if (!this.options.headers) {
        this.options.headers = [];
        }
        let header: any = { 'name': headerName, 'value': value };
        this.options.headers.push(header);
    }
}