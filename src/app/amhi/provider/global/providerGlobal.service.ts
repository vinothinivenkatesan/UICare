import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from './../../../constants';


@Injectable()
export class ProviderGlobalService {
    public base_url: any;
    
    constructor(public http: Http, constants: Constants) {
        this.base_url = constants.root_path;
    }
    
    public getState() {
        // ...using get request
        return this.http.get( this.base_url + '/providers/references/states')
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getCity(stateId:any) {
        // ...using get request
        //const url="http://10.242.108.5:8089/CAREBusinessServices/providers/references/"
        return this.http.get(this.base_url + '/providers/references/'+ stateId +'/cities')
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
}