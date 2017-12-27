import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from './../../../constants';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WebService {
    //public base_url: any;

    constructor(public http: Http) {
        //this.base_url = constants.root_path;
    }

    public serviceCall(method: string, endPoint: string, body?: any): any {
        //let url=this.base_url +""+ endPoint;
        let url:any= endPoint;
        if (method == 'get' && body) {
            return this.http.get(url, { search: body })
                .retry(2)
                .map((res: Response) => {
                    let responseType = res.headers.get('content-type');
                    let returnValue: any = res;
                    if (responseType.indexOf('json') > -1) {
                        returnValue = returnValue.json();
                    }
                    else if (responseType.indexOf('text') > -1) {
                        returnValue = returnValue._body;
                    }
                    return returnValue;
                })
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        }
        else if (method == 'get') {
            return this.http.get(url)
                .retry(2)
                .map((res: Response) => {
                    let responseType = res.headers.get('content-type');
                    let returnValue: any = res;
                    if (responseType.indexOf('json') > -1) {
                        returnValue = returnValue.json();
                    }
                    else if (responseType.indexOf('text') > -1) {
                        returnValue = returnValue._body;
                    }
                    return returnValue;
                })
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        }
        else if (method == 'post') {
            let bodyString = JSON.stringify(body);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this.http.post(url, body, options)
                .retry(2)
                .map((res: Response) => {
                    let responseType = res.headers.get('content-type');
                    let returnValue: any = res;
                    if (responseType.indexOf('json') > -1) {
                        returnValue = returnValue.json();
                    }
                    else if (responseType.indexOf('text') > -1) {
                        returnValue = returnValue._body;
                    }
                    return returnValue;
                })
                .catch((error: any) => Observable.throw(error || 'Server error'));
        }
        else if (method == 'put') {
            let bodyString = JSON.stringify(body);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this.http.put(url, body, options)
                .retry(2)
                .map((res: Response) => {
                    let responseType = res.headers.get('content-type');
                    let returnValue: any = res;
                    if (responseType.indexOf('json') > -1) {
                        returnValue = returnValue.json();
                    }
                    else if (responseType.indexOf('text') > -1) {
                        returnValue = returnValue._body;
                    }
                    return returnValue;
                })
                .catch((error: any) => Observable.throw(error || 'Server error'));
        }
        else {
            console.log('error');
        }
    }
}