import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ClaimEntryService {
    public base_url: any;
    public postclaimUrl: any;

    constructor(public http: Http) {
         this.base_url = "http://10.242.108.7:8080";
    }

    public getClaimEntry() {
        return this.http.get(this.base_url + '/SampleReferencesPOC/claim/references')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public postClaim(refData: any) {
        this.postclaimUrl = this.base_url + '/SampleReferencesPOC/claim/s/';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.postclaimUrl, refData, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

}