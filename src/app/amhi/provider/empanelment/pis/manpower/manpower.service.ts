import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from './../../../../../constants';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ManpowerService{
    public base_url: any;
    
    constructor(public http: Http, constants: Constants) {
        this.base_url = constants.root_path;
    }
     
       public getChannel(meth, url) {
           if(meth=='get'){
               // ...using get request
                return this.http.get("http://localhost:3001/"+url)
                    // ...and calling .json() on the response to return data
                    .map((res: Response) => res.json())
                    //...errors if any
                    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
           }
           else{
               console.log('error');
           }
    }
}