import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from './../../../../../constants';
import { Privileges } from './../../../../../theme/services/privileges/privileges.service';


@Injectable()
export class GeneralinformationService {
    public base_url: any;
    private provider_id: string;

    constructor(public http: Http, constants: Constants, public _privilege: Privileges) {
        this.base_url = constants.root_path;
    }

    public getProviderDetails(providerId) {
        // ...using get request
        return this.http.get(this.base_url + '/providers/information/' + providerId)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getRequestSource() {
        return this.http.get(this.base_url + '/providers/references/requestsource')
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getEntityType() {

        return this.http.get(this.base_url + '/providers/references/entitytype')
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getAdminOffice() {
        return this.http.get(this.base_url + '/providers/references/adminoffice')
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getGeneralInfo() {
        return this.http.get(this.base_url + '/providers/references/information')
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getSpeciality(){
         return this.http.get(this.base_url + '/providers/references/specialty')
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}