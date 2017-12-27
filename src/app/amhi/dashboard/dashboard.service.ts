import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from './../../constants';
import { Privileges } from './../../theme/services/privileges/privileges.service';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DashboardService {
    public base_url: any;

    constructor(public http: Http, constants: Constants,private _privilege: Privileges) {
        this.base_url = constants.root_path;
    }


    public getTableData() {
        // ...using get request
        let username=this._privilege.getLoggedUser();
        //http://10.242.108.5:8089/CAREBusinessServices/providers/dashboard/tasklist/providermaker1
        return this.http.get(this.base_url+'/providers/dashboard/tasklist/'+username)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}