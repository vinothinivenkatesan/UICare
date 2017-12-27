import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { Privileges } from './../../../../../../theme/services/privileges/privileges.service';
import { GeneralinformationService } from './../../generalinformation/generalinformation.service';
import { ProviderGlobalService } from './../../../../global/providerGlobal.service';

@Component({
    selector: 'provider-details',
    encapsulation: ViewEncapsulation.None,
    template: require('./providerdetails.html'),
    styles: [require('./providerdetails.scss')]
})
export class Providerdetails implements OnInit {

    @Input() formtitle: string;
    @Input() parentObj: any;

    public timefrom = { hour: 13, minute: 30 };
    public timeto = { hour: 18, minute: 30 };
    public defaultSelect: any = '';
    public singelSpecVal: any = "";
    public selectedMultiSpecialtyId: any;
    public alternateNames = [];
    public landlineNumbers = [];
    public mobileNumbers = [];
    public emailAddresses = [];
    public requestSourceList: any;
    public entityTypeList: any;
    public stateList: any;
    public districtList: any;
    public cityList: any;
    public ownershipList: any;
    public selectedCity: any;
    public organizationList: any;
    public providerId: string;

    public selectedMultiSpecialty = [];
    public multiSpecialtyList = [];
    public singelSpecialtyList = [];

    /* component AKA*/
    public tagObject1: any = [{ value: 'Name1 User', display: 'Name1 User' }, { value: 'Solo', display: 'Solo' }, { value: 'Ram Kumar', display: 'Ram Kumar' }];
    public myObj1: any = { value: 'Solo' }
    public myType1: any = { type: 1, name: 'alternateName' };
    /* component AKA*/
    public tagObject2: any = [{ value: 'Name1 User', display: 'Name1 User' }, { value: 'Solo', display: 'Solo' }, { value: 'Ram Kumar', display: 'Ram Kumar' }];
    public myObj2: any = { value: 1 }
    public myType2: any = { type: 2, name: 'landlineNumber' };
    /* component AKA*/
    public tagObject3: any = [{ value: 'Name1 User', display: 'Name1 User' }, { value: 'Solo', display: 'Solo' }, { value: 'Ram Kumar', display: 'Ram Kumar' }];
    public myObj3: any = { value: 'Solo', verified: true, OTP: '12b3' }
    public myObj4: any = { value: 'Solo', verified: false, OTP: '123' }
    public myType3: any = { type: 3, name: 'mobileNumber' };
    public myType4: any = { type: 3, name: 'emailAddress' };

    public blacklistOptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];

    public specialtyOptions: any = [{ name: "Single", id: "44" }, { name: "Multiple", id: "2" }];

    public trustTypeoptions: any = [{ name: "Teaching", id: "1" }, { name: "Non-Teaching", id: "2" }];

    constructor(private _privilege: Privileges, public generalinfoService: GeneralinformationService, private providerGlobalService: ProviderGlobalService) {
        this.providerId = "HSPCHN000005";//this._privilege.currentProviderId;       
    }

    ngOnInit() {
        this.getRequestSource();
        this.getEntityType();
        this.loadProviderDetails(this.providerId);
        this.loadState();
        this.getCity(this.parentObj.stateId);
        this.loadGeneralInfo();
        this.loadSpeciality();
    }

    private loadProviderDetails(providerId) {
        console.log(providerId);
        this.generalinfoService.getProviderDetails(providerId)
            .subscribe(
            results => {
                this.parentObj = results;
                this.populateTagsItems();
            },
            err => {
                console.log(err);
            });
    }

    populateTagsItems() {
        this.alternateNames = this.objectToArray(this.parentObj.alternateNames, 'alternateName');
        this.landlineNumbers = this.objectToArray(this.parentObj.landlineNumbers, 'contactNumber');
        this.mobileNumbers = this.objectToArray(this.parentObj.mobileNumbers, 'contactNumber');
        this.emailAddresses = this.objectToArray(this.parentObj.emailAddresses, 'emailAddress');
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
    loadState() {
        this.providerGlobalService.getState()
            .subscribe(
            results => {
                this.stateList = results;
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            });
    }
    getCity(stateId) {
        let outer = this;
        this.providerGlobalService.getCity(stateId)
            .subscribe(
            result => {
                outer.cityList = result;
                if (outer.parentObj.cityId != '') {
                    outer.selectedCity = outer.cityList.find(function(item, index, arr) {
                        if (outer.parentObj.cityId == item.cityId) {
                            return item;
                        }
                    });
                }
                if (outer.selectedCity != '') {
                    outer.districtList = [];
                    outer.districtList.push(outer.selectedCity.district);
                }
            });
    }

    loadGeneralInfo() {
        this.generalinfoService.getGeneralInfo()
            .subscribe(
            results => {
                this.ownershipList = results.ownershipType;
                this.organizationList = results.organizationType;
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            });
    }

    loadSpeciality() {
        this.generalinfoService.getSpeciality()
            .subscribe(
            results => {
                this.multiSpecialtyList = this.objectToMultiSelectOption(results.specialty, /specialtyId/g, /specialtyName/g);
                this.singelSpecialtyList = results.specialty;
                this.specialtyOptions = this.objectToMultiSelectOption(results.specialtyType, /specialtyTypeId/g, /specialtyTypeName/g);
                this.parentObj.additionalDetails.specialtyTypeId = this.specialtyOptions[0].id;
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            });
    }

    objectToMultiSelectOption(obj, idPropRegx, namePropRegx) {
        let temp = JSON.stringify(obj);
        temp = temp.replace(idPropRegx, 'id');
        temp = temp.replace(namePropRegx, 'name');
        return JSON.parse(temp);
    }

    setSpecialty(val) {
        let outer = this;
        this.selectedMultiSpecialtyId = [];
        this.multiselectChange(this.selectedMultiSpecialtyId, 'multiSpecialty');
        this.singelSpecVal = this.defaultSelect;
        this.parentObj["providerSpecialty"] = [];
        this.parentObj.additionalDetails.specialtyTypeId = val;
    }

    specalityTypeCheck(val) {
        return val == this.parentObj.additionalDetails.specialtyTypeId;
    }

    private multiselectChange(event, genericName) {
        this['selected' + this.capitalizeFirstLetter(genericName)] = this._skipId(event, this[genericName + 'List']);
        if (this['selected' + this.capitalizeFirstLetter(genericName) + 'Id'].length == 0) {
            this['selected' + this.capitalizeFirstLetter(genericName) + 'Id'] = null;
        }
        if (genericName == "multiSpecialty") {
            this.parentObj["providerSpecialty"] = this.addProviderSpecialty(this['selected' + this.capitalizeFirstLetter(genericName) + 'Id'])
        }
    }

    addProviderSpecialty(val) {
        let temp = [];
        if (val) {
            if (val.constructor == Array) {
                for (let i = 0; i < val.length; i++) {
                    let obj = {};
                    obj['specialtyId'] = val[i];
                    obj['providerSpecialtyId'] = null;
                    obj['isDeleted'] = 'N';
                    obj['otherSpecialtyName'] = '';
                    temp.push(obj);
                }
            } else {
                let obj = {};
                obj['specialtyId'] = val;
                obj['providerSpecialtyId'] = null;
                obj['isDeleted'] = 'N';
                obj['otherSpecialtyName'] = '';
                temp.push(obj);
            }
        }
        return temp;
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    private _skipId(event: any, multiSelectOption: any[]): any[] {// get the set of names from []of ids
        let tempObj = [];
        multiSelectOption.filter(function(item, index, arr) {
            if (event.indexOf(item.id) != -1) {
                tempObj.push(item.name);
            }
        });
        return tempObj;
    }
}