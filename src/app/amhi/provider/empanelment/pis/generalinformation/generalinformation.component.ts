import { Component, ViewEncapsulation, Input } from '@angular/core';
import { GeneralinformationService } from './generalinformation.service';
@Component({
    selector: 'general-information',
    encapsulation: ViewEncapsulation.None,
    template: require('./generalinformation.html'),
    styles: [require('./generalinformation.scss')],

})
export class Generalinformation {

    public alternateNames = [];
    public landlineNumbers = [];
    public mobileNumbers = [];
    public emailAddresses = [];
    public requestSourceList: any;
    public entityTypeList: any;
    public adminOfficeList: any;
    public adminAddress: any;
    public providerId: string;
    public providerObj: any = {
        "providerId": null,
        "requestSourceId": 586,
        "providerName": "Apollo Dental Care",
        "providerCode": null,
        "entityTypeId": 1,
        "plotNumber": "251",
        "streetName": "mills road",
        "localityName": "kelly",
        "landmarkName": "ponu super market",
        "industryBlacklistIndicator": "Y",
        "stateId": 83,
        "districtId": 87,
        "cityId": 91,
        "pincode": 242312,
        "bedCount": {
            "providerInfrastructureId": null,
            "strengthCount": 10
        },
        "alternateNames": [{
            "alternateNameId": "18",
            "alternateName": "Apo",
            "isDeleted": "Y"
        }, {
            "alternateNameId": "19",
            "alternateName": "Apollo Dental Care",
            "isDeleted": "N"
        }, {
            "alternateNameId": "20",
            "alternateName": "Apollo",
            "isDeleted": "N"
        }],
        "additionalDetails": {
            "website": "www.apollohospitals.com",
            "longitude": 123,
            "latitude": 256,
            "rohiniId": "ROHINI12345",
            "specialtyTypeId": 44,
            "adminOfficeId": 2
        },
        "providerSpecialty": [
            {
                "specialtyId": 46,
                "providerSpecialtyId": null,
                "isDeleted": "N",
                "otherSpecialtyName": ""
            }
        ],
        "landlineNumbers": [{
            "contactId": 57,
            "isDeleted": "N",
            "contactNumber": "044-2345673"
        }],
        "mobileNumbers": [{
            "contactId": 55,
            "isDeleted": "N",
            "contactNumber": "9876543210"
        }],
        "emailAddresses": [{
            "contactId": 52,
            "isDeleted": "N",
            "emailAddress": "amhi@google.com"
        }],
        "trustType": "1",
        "remarks": "new amhi",
        "corpPlotNo": "30",
        "corpName": "Name",
        "corpStreetname": "Mills road",
        "corpLocality": "Gurgram",
        "corpLandmark": "ponu super market",
        "corpState": "",
        "corpDistrict": "",
        "corpCity": "",
        "corpPincode": 242312,
        "corpBlack": "Y",
        "corpOwner": "1",
        "corpContact": "1",
        "corpAltContact": "",
        "corpFax": "1",
        "corpEmail": "",
        "corpRecognized": "",
        "corpChequeAddress": "1",
        "corpLandlineNumber": "",
        "corpLandlineCode": "",
        "adminUnit": "",
        "adminName": "",
        "adminPlotNo": "30",
        "adminStreetname": "Mills road",
        "adminLocality": "kelly",
        "adminLandmark": "ponu super market",
        "adminState": "",
        "adminDistrict": "",
        "adminCity": "",
        "adminPincode": 242312,
        "adminBlack": "Y",
        "adminOwner": "1",
        "adminContact": "1",
        "adminAltContact": "",
        "adminFax": "1",
        "adminEmail": "",
        "adminRecognized": "",
        "adminChequeAddress": "1",
        "adminLandlineNumber": "",
        "adminLandlineCode": "",
        "isAdmin": "2",
        "isAdminEmpanel": "N"
    };

    constructor(public generalinfoService: GeneralinformationService) {
        this.providerId = "HSPCHN000005";//this._privilege.currentProviderId; 
    }

    ngOnInit() {
        this.getRequestSource();
        this.getEntityType();
        this.getAdminOffice();
        this.loadProviderDetails(this.providerId);
    }

    private loadProviderDetails(providerId) {
        console.log(providerId);
        this.generalinfoService.getProviderDetails(providerId)
            .subscribe(
            results => {
                this.providerObj = results;
                this.populateTagsItems();
            },
            err => {
                console.log(err);
            });
    }

    populateTagsItems() {
        this.alternateNames = this.objectToArray(this.providerObj.alternateNames, 'alternateName');
        this.landlineNumbers = this.objectToArray(this.providerObj.landlineNumbers, 'contactNumber');
        this.mobileNumbers = this.objectToArray(this.providerObj.mobileNumbers, 'contactNumber');
        this.emailAddresses = this.objectToArray(this.providerObj.emailAddresses, 'emailAddress');
    }

    objectToArray(obj, propertyName) {
        let tempArray = [];
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].isDeleted == 'N') {
                tempArray.push(obj[i][propertyName]);
            }
        }
        return tempArray;
    }

    getRequestSource() {
        let outer = this;
        this.generalinfoService.getRequestSource()
            .subscribe(
            result => {
                outer.requestSourceList = result;
            },
            err => {
                console.log(err);
            }
            );
    }
    getEntityType() {
        let outer = this;
        this.generalinfoService.getEntityType()
            .subscribe(
            result => {
                outer.entityTypeList = result;
            },
            err => {
                console.log(err);
            });
    }

    getAdminOffice() {
        let adminID = this.providerObj.additionalDetails.adminOfficeId;
        let outer = this;
        this.generalinfoService.getAdminOffice()
            .subscribe(
            result => {
                outer.adminOfficeList = result;
                for (let i = 0; i < result.length; i++) {
                    if (result[i].administrativeOfficeId == adminID) {
                        outer.adminAddress = result[i].administrativeOfficeAddress;
                    }
                }
            },
            err => {
                console.log(err);
            }
            );
    }

    formSubmit(formError) {
        formError.ngSubmit.emit();
        formError._submitted = true;
        if (formError.valid) {
            //this.registerSubmit();
        }
    }




}