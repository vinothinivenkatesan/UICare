import { Injectable } from '@angular/core';
import { WebService } from './../webService/webService.service'
@Injectable()
export class ReferenceData {
    constructor(private WebService: WebService) {
    }
    private requestSourceList='';
    private entityTypeList='';
    private stateList='';
    private specialtyObj='';
    private adminOfficeList='';
    private empanelReferenceObj='';
    private registerActionObj='';
    private photographTypesList='';
    private certificateTypesObj='';
    private getSubUrl(getProperty){
        let url='';
        switch(getProperty){
            case 'requestSourceList':
            return '/providers/references/requestsource';
            //break;
            case 'entityTypeList':
            return '/providers/references/entitytype';
            //break;
            case 'stateList':
            return '/providers/references/states';
            //break;
            case 'specialtyObj':
            return '/providers/references/specialty';
            //break;
            case 'adminOfficeList':
            return '/providers/references/adminoffice';
            //break;
            case 'empanelReferenceObj':
            return '/providers/references/actions/MAKER_EMPANELMENT';
            //break;
            case 'registerActionObj':
            return '/providers/references/actions/CHECKER_REGISTER';
            //break;
            case 'photographTypesList':
            return '/providers/references/photographtypes';
            //break;
            case 'certificateTypesObj':
            return '/providers/references/certificatetypes';
            //break;
        }
    }
    /*
    http://10.24.142.53:8080/CAREBusinessServices/providers/references/photographtypes (GET)

http://10.24.142.53:8080/CAREBusinessServices/providers/references/certificatetypes/hospital  (GET)

http://10.24.142.53:8080/CAREBusinessServices/providers/references/certificatetypes/diagnosticcenter (GET)

http://10.24.142.53:8080/CAREBusinessServices/providers/references/certificatetypes/indiandoctorclinic (GET)

http://10.24.142.53:8080/CAREBusinessServices/providers/references/certificatetypes/nonindiandoctorclinic (GET)

    */
    getReferenceData(getProperty){
        return this[getProperty];
    }
    setReferenceData(setProperty, data){
        this[setProperty]=data;
    }
    getReferenceDataService(getProperty, entitySpecific?){
        if(this[getProperty]!=undefined){
            if((this[getProperty]!='')||(this[getProperty][entitySpecific])){
                let outer=this;
                let subUrl=this.getSubUrl(getProperty);
                if(entitySpecific){
                    subUrl+="/"+entitySpecific;
                }
                this.WebService.serviceCall('get', subUrl)
                    .subscribe(
                    result => {
                        if(entitySpecific){
                            outer[getProperty][entitySpecific]=result;
                            return outer[getProperty][entitySpecific];
                        }else{
                            outer[getProperty] = result;
                            return outer[getProperty];
                        }
                        
                    },
                    err => {
                        console.log(err);
                    }
                    );                
            }else{
                if(entitySpecific){
                    return this[getProperty][entitySpecific];
                }else{
                    return this[getProperty];
                }
            }
        }
        else{
            console.log(getProperty+' is not a valid ReferenceData.');
        }
    }
}