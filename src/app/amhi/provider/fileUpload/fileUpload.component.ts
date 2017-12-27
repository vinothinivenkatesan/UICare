import { Component, ViewEncapsulation, ViewChild, Input, OnInit } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = /*'http://localhost:3002/api';*/'http://10.24.142.53:8080';// http://localhost:8087/WCC-POC/viewdocument';


@Component({
    selector: 'file-upload',
    styles: [require('./fileUpload.scss')],
    template: require('./fileUpload.html'),
    encapsulation: ViewEncapsulation.None
})
export class FileUpload {
    /*File Upload*/
    public savedFiles: any = [

        {
            "docTitle": "AMHIDEVORAPP11000013",
            "docName": "http://www.apollomunichinsurance.com/Downloads/Educare-Brochure.pdf",
            "isDeleted": "N"
        },
        {
            "docTitle": "AMHIDEVORAPP11000015",
            "docName": "http://www.apollomunichinsurance.com/Downloads/Educare-Claim-Procedure.pdf",
            "docAuthor": "weblogic"
        },
        {
            "docTitle": "AMHIDEVORAPP11000014",
            "docName": "http://www.apollomunichinsurance.com/Downloads/Educare-Rate-Card.pdf",
            "docAuthor": "weblogic"
        }
    ];
    public myEndPoint = '/providers/documents';
}