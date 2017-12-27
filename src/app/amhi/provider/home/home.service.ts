import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from './../../../constants';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeService {
    public base_url: any;

    constructor(public http: Http, constants: Constants) {
        this.base_url = constants.root_path;
    }

    public getTableData(pageCurrent, recordLength, searchText) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('searchText', searchText);
        params.set('pageNo', pageCurrent);
        params.set('rowCount', recordLength);
        // ...using get requesthttp://10.242.108.5:8089/CAREBusinessServices/providers/search?searchText=&pageNo={pageNo}&rowCount={rowCount} 
        return this.http.get(this.base_url + '/providers/search', { search: params })
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getStatusandCategory() {
        // ...using get request
        return this.http.get(this.base_url + '/providers/references/additionalgeography')
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    public getEntityType() {
        // ...using get request
        return this.http.get(this.base_url + '/providers/references/entitytype')
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    //    public getSearchResults(search) {
    //        // ...using get request
    //        return this.http.get(this.base_url + '/providers/search?searchText='+search+'&pageNo=1&rowCount=100')
    //            // ...and calling .json() on the response to return data
    //            .map((res: Response) => res.json())
    //            //...errors if any
    //            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    //    }

    public getAdvancedSearchResults(searchValues, pageCurrent, recordLength) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('providerName', searchValues.name);
        params.set('alternateName', searchValues.aka);
        params.set('providerCode', searchValues.code);
        params.set('stateId', searchValues.state);
        params.set('cityId', searchValues.city);
        params.set('irdaCode', searchValues.irdacode);
        params.set('pincodeId', searchValues.pincode);
        params.set('entityTypeId', searchValues.entitytype);
        params.set('panNumber', searchValues.pannumber);
        params.set('providerCategoryId', searchValues.category);
        params.set('statusId', searchValues.status);
        params.set('pageNo', pageCurrent);
        params.set('rowCount', recordLength);
        return this.http.get(this.base_url + '/providers/list', { search: params })
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getRejectionReason(code) {
        // ...using get request
        return this.http.get(this.base_url + '/providers/information/' + code + '/reason')
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}