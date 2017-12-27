import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from './../../../../constants';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChanneldetailsService {
    public base_url: any;
    
    constructor(public http: Http, constants: Constants) {
        this.base_url = constants.root_path;
    }
    
    public getChannel() {
        // ...using get request
        return this.http.get( this.base_url+'/getchannel')
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}