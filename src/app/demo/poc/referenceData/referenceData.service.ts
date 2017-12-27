import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable}     from 'rxjs/Observable';
//import { Constants } from './../../../constants';
//
//// Import RxJs required methods
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

@Injectable()
export class ReferenceDataService {
    public base_url: any;
    public postdiagUrl: any;

    constructor(public http: Http) {
        this.base_url = "http://10.242.108.7:8080";
    }

    public getDiagnosis(Id) {
        return this.http.get(this.base_url + '/SampleReferencesPOC/diagnosis/references/'+Id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }


    public postDiagnosis(refData: any) {

        this.postdiagUrl = this.base_url + '/SampleReferencesPOC/diagnosis/s/';
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.postdiagUrl, refData, options)
            .map((res: Response) => res.json())
            .catch((error: Response) => Observable.throw(error.json().error));

    }

}