import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { Privileges } from './../../../theme/services/privileges/privileges.service';
import { ReferenceData } from './../../../theme/services/referenceData/referenceData.service';
import { WebService } from './../../../theme/services/webService/webService.service';
import { ProviderURLConstants } from '../common/providerURLConstants';
import { MessageConstants } from '../../global/messageConstants';
import { SharedMethods } from '../../global/sharedMethods';

@Component({
    selector: 'register',
    encapsulation: ViewEncapsulation.None,
    template: require('./register.html'),
    styles: [require('./register.scss')]
})
export class Register implements OnInit {

    @Input() buttonName: string;
    public requestSourceList: any = [];
    public adminOfficeList: any = [];
    public remarksList = [];
    public checkerAction: any = {remarks: '',actionTakenId: ''};
    public empanelActionList: any = [];
    public empanelReasonList: any = [];
    public registerActionList: any = [];
    public riseEmpanel: any = false;
    public remark: any = false;
    public blacklistOptions: any = [{ name: "Yes", id: "Y" }, { name: "No", id: "N" }];
    public singelSpecVal: any = "";
    public specialtyOptions: any = [{ name: "Single", id: "1" }, { name: "Multiple", id: "2" }];    
    public viewProviderId: any;
    public defaultSelect: any = null;
    public selectedCity: any = this.defaultSelect;
    public selectedAdminOffice: any = this.defaultSelect;
    public adminOfficeAddress: any;
    /*MultiSelect*/
    public selectedMultiSpecialtyId = null;
    public selectedMultiSpecialty = [];
    public multiSpecialtyList = [];
    public singelSpecialtyList = [];
    /*custom Modal*/
    public alertNotifyModal: any;
    public confirmNotifyModal: any;
    private notifyHeader = 'Notification';
    private notifyBody;
    private notifyType = 'alert';
    private notifyType2 = 'confirm';
    private notifyPurpose;
    private notifyBtn1;
    private notifyBtn2;
    private isInactiveMaker: boolean = false;
    private isOnprogressMaker: boolean = false;
    private isCompletedMaker: boolean = false;
    private isInactiveChecker: boolean = false;
    private isOnprogressChecker: boolean = false;
    private isCompletedChecker: boolean = false;
    /*File Upload*/
    public savedFiles: any = [];
    //public myEndPoint = '/providers/documents';
    public docBusinessType = 'Registration';
    public providerCode = '';
    /* component AKA*/
    public myObj1: any = { value: 'Solo' }//here make tag as selected provider name in alsoKnown
    public myType1: any = { type: 1, name: 'alternateName' };
    /* component AKA*/
    //public myObj2: any = { value: 1 }//set veriffied icon on tag//for icon tag
    //public myType2: any = { type: 2, name: 'landlineNumber' };//for icon tag
    /* component AKA*/
    public myObj3: any = { value: 'Solo', verified: true, OTP: '123' }
    public myObj4: any = { value: 'Solo', verified: false, OTP: '123' }
    public myType3: any = { type: 3, name: 'mobileNumber' };
    public myType4: any = { type: 3, name: 'emailAddress' };
    public entityTypeList: any = [];
    public stateList: any = [];
    public districtList: any = [];
    public cityList: any = [];
    public alsoKnown = '';
    public alternateNames = [];
    public landlineNumbers = [];
    public mobileNumbers = [];
    public emailAddresses = [];
    public landlineCode: any = '';
    public landlineNumber: any = '';
    public mobileNumber: any = '';
    public emailAddress: any = '';
    public registerObj: any = {
        "providerId": null,
        "requestSourceId": null/*"Sample Source"*/,
        "providerName": null/*"Apollo Hospital"*/,
        "providerCode": null,
        "entityTypeId": this.defaultSelect,
        "plotNumber": ''/*"22"*/,
        "streetName": ''/*"MTH Road, Main Road"*/,
        "localityName": ''/*"Kolathur"*/,
        "landmarkName": ''/*"Near Kolathur Bus Stand"*/,
        "industryBlacklistIndicator": 'N'/*"Y"*/,
        "stateId": this.defaultSelect,
        "districtId": this.defaultSelect,
        "cityId": this.defaultSelect,
        "pincode": '',
        "bedCount": {
            "providerInfrastructureId": null,
            "strengthCount": ''
        },
        "alternateNames": [],
        "additionalDetails": {
            "website": "",
            "specialtyTypeId": "",
            "rohiniId": "",
            "longitude": "",
            "latitude": ""
        },
        "providerSpecialty": [],
        "landlineNumbers": [],
        "mobileNumbers": [],
        "emailAddresses": [],
        "remarks": "",
        "saveFlag": false,
        "screenName": "REGISTER",
        "transactionMnemonic": "",
        "userName": ''
    };

    public selectPrefered(val) {
        this.registerObj.providerName = val;
    }

    constructor(private registerService: RegisterService, private webService: WebService, private privilege: Privileges, private referenceData: ReferenceData, public router: Router, private urlConstants: ProviderURLConstants,
    private sharedMethods: SharedMethods,private messageConstants: MessageConstants) {
        if (privilege.getUserRole() == 'Maker1') {
            this.isOnprogressMaker = true;
            this.isInactiveChecker = true;
        } else {
            if (privilege.getUserRole() == 'Checker1') {
                this.isOnprogressChecker = true;
                this.isCompletedMaker = true;
            }
        }
    }
    ngOnInit() {
        this.initializeData();
    }
    private isAddonDisabel(modelRef, modelRef2?){
        return false;
    }
    private setOfficeAddress(obj) {
        this.registerObj.additionalDetails.adminOfficeId = obj.administrativeOfficeId;
        this.adminOfficeAddress = obj.administrativeOfficeAddress;
    }
    private initializeData() {
        this.getRequestSource();
        this.getEntityType();
        this.getStates();
        this.getSpecialty();
    }
    private registeredProviderDetail() {
        if (this.privilege.getCurrentTask() != 'prvRegNew' || this.privilege.currentProviderId != '') {
            this.viewProviderId = this.privilege.currentProviderId;
            this.getRegisteredData(this.viewProviderId);
        }
    }
    
    private addProviderSpecialty(val) {
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
    private specalityTypeCheck(val) {
        return val == this.registerObj.additionalDetails.specialtyTypeId;
    }
    private singelSpecialtyChange(event) {
        let newObj = this.addProviderSpecialty(this.singelSpecVal);
        this.registerObj["providerSpecialty"] = this.addProviderSpecialty(this.singelSpecVal);
    }
    private getRequestSource() {
        if (this.referenceData.getReferenceData('requestSourceList') == '') {
            let outer = this;
            this.webService.serviceCall('get', this.urlConstants.Mnemonic.Registration.PRV_REG_REQSRC + this.urlConstants.SCREEN_NANME.MSG_01)
                .subscribe(
                result => {
                    outer.requestSourceList = result;
                    outer.referenceData.setReferenceData('requestSourceList', result);
                },
                err => {
                    console.log(err);
                }
                );
        }
        else {
            this.requestSourceList = this.referenceData.getReferenceData('requestSourceList');
        }
    }
    private getEntityType() {
        if (this.referenceData.getReferenceData('entityTypeList') == '') {
            let outer = this;
            this.webService.serviceCall('get', this.urlConstants.Mnemonic.Registration.PRV_REG_ENTITY_TYPE)
                .subscribe(
                result => {
                    outer.entityTypeList = result;
                    outer.referenceData.setReferenceData('entityTypeList', result);
                },
                err => {
                    console.log(err);
                }
                );
        } else {
            this.entityTypeList = this.referenceData.getReferenceData('entityTypeList');
        }
    }
    private getStates() {
        if (this.referenceData.getReferenceData('stateList') == '') {
            let outer = this;
            this.webService.serviceCall('get', this.urlConstants.Mnemonic.Global.PRV_GBL_STATE)
                .subscribe(
                result => {
                    outer.stateList = result;
                    outer.referenceData.setReferenceData('stateList', result);
                },
                err => {
                    console.log(err);
                }
                );
        } else {
            this.stateList = this.referenceData.getReferenceData('stateList');
        }

    }
    private getSpecialty() {
        if (this.referenceData.getReferenceData('specialtyObj') == '') {
            let outer = this;
            this.webService.serviceCall('get', this.urlConstants.Mnemonic.Registration.PRV_REG_SPECIALITY)
                .subscribe(
                result => {
                    outer.multiSpecialtyList = outer.sharedMethods.convertJsonProperty(result.specialty, /specialtyId/g, /specialtyName/g);
                    outer.singelSpecialtyList = result.specialty;
                    outer.specialtyOptions = outer.sharedMethods.convertJsonProperty(result.specialtyType, /specialtyTypeId/g, /specialtyTypeName/g);
                    outer.registerObj.additionalDetails.specialtyTypeId = outer.specialtyOptions[0].id;
                    outer.referenceData.setReferenceData('specialtyObj', result);
                    outer.getSpecificReferance();
                },
                err => {
                    console.log(err);
                }
                );
        } else {
            let tempObj = this.referenceData.getReferenceData('specialtyObj');
            this.multiSpecialtyList = this.sharedMethods.convertJsonProperty(tempObj.specialty, /specialtyId/g, /specialtyName/g);
            this.singelSpecialtyList = tempObj.specialty;
            this.specialtyOptions = this.sharedMethods.convertJsonProperty(tempObj.specialtyType, /specialtyTypeId/g, /specialtyTypeName/g);
            this.registerObj.additionalDetails.specialtyTypeId = this.specialtyOptions[0].id;
            this.getSpecificReferance();
        }
    }
    private getSpecificReferance() {
        if (this.privilege.getCurrentTask() == 'prvRegView') {
            this.getAdminOffice();
            this.getEmpanelActions();
        }
        if (this.privilege.getCurrentTask() == 'prvRegChk' || (this.privilege.getCurrentTask() == 'prvRegNew' && this.privilege.currentProviderId != '') || this.privilege.getCurrentTask() == 'prvEmpReg') {
            if (this.privilege.getCurrentTask() == 'prvRegChk') {
                this.getRegisterActions();
            }
            this.getRemarkList();
            this.registeredProviderDetail();
        }
    }
    private getRemarkList() {
        let outer = this;
        this.webService.serviceCall('get', this.urlConstants.GetMnemonicURL('PRV_REG_INF_RMKS',this.privilege.currentProviderId))
            .subscribe(
            result => {
                outer.remarksList = result;
            },
            err => {
                console.log(err);
            }
            );
    }
    private getAdminOffice() {
        if (this.referenceData.getReferenceData('adminOfficeList') == '') {
            let outer = this;
            this.webService.serviceCall('get', this.urlConstants.Mnemonic.Registration.PRV_REG_ADM_OFF)
                .subscribe(
                result => {
                    outer.adminOfficeList = result;
                    outer.referenceData.setReferenceData('adminOfficeList', result);
                    outer.registeredProviderDetail();
                },
                err => {
                    console.log(err);
                }
                );
        } else {
            this.adminOfficeList = this.referenceData.getReferenceData('adminOfficeList');
            this.registeredProviderDetail();
        }
    }
    private getEmpanelActions() {
        if (this.referenceData.getReferenceData('empanelReferanceObj') == '') {
            let outer = this;
            this.webService.serviceCall('get', this.urlConstants.Mnemonic.Registration.PRV_REG_MKR_EMP)
                .subscribe(
                result => {
                    outer.empanelActionList = result.actionTaken;
                    outer.empanelReasonList = result.reasonList;
                    outer.referenceData.setReferenceData('empanelReferanceObj', result);
                },
                err => {
                    console.log(err);
                }
                );
        } else {
            let tempObj = this.referenceData.getReferenceData('empanelReferanceObj');
            this.empanelActionList = tempObj.actionTaken;
            this.empanelReasonList = tempObj.reasonList;
        }
    }
    private getRegisterActions() {
        if (this.referenceData.getReferenceData('registerActionObj') == '') {
            let outer = this;
            this.webService.serviceCall('get', this.urlConstants.Mnemonic.Registration.PRV_REG_CHK_ACT)
                .subscribe(
                result => {
                    outer.registerActionList = result.actionTaken;
                    outer.referenceData.setReferenceData('registerActionObj', result);
                },
                err => {
                    console.log(err);
                }
                );
        } else {
            let tempObj = this.referenceData.getReferenceData('registerActionObj');
            this.registerActionList = tempObj.actionTaken;
        }
    }
    private setFocusToError(model?) {
        let scrollTopVal = jQuery('.page-top').height();
        if (model) {
            scrollTopVal = jQuery("#" + model).offset().top - scrollTopVal;
            jQuery('html,body').animate({ scrollTop: scrollTopVal }, 'slow');
        } else {
            scrollTopVal = jQuery(".has-error").first().find('.form-control').offset().top - scrollTopVal;
            jQuery('html,body').animate({ scrollTop: scrollTopVal }, 'slow');
            jQuery('.has-error').first().find('.form-control').focus();
        }
    }
    private getCity(stateId) {
        let outer = this;
        this.webService.serviceCall('get', this.urlConstants.GetMnemonicURL('PRV_GLB_CITY',stateId))
            .subscribe(
            result => {
                outer.cityList = result;
                if (outer.registerObj.cityId != outer.defaultSelect) {
                    outer.selectedCity = outer.cityList.find(function (item, index, arr) {
                        if (outer.registerObj.cityId == item.cityId) {
                            return item;
                        }
                    });
                }
                if (outer.selectedCity != outer.defaultSelect) {
                    outer.districtList = [];
                    outer.districtList.push(outer.selectedCity.district);
                }
            },
            err => {
                console.log(err);
            }
            );
    }
    private stateChanged(stateId) {
        this.resetCity();
        this.getCity(stateId);

    }
    private setDistrictList(obj) {
        this.registerObj.cityId = obj.cityId;
        this.districtList.push(obj.district);
    }
    private resetCity() {
        this.cityList = [];
        this.selectedCity = this.defaultSelect;
        this.registerObj.cityId = this.defaultSelect;
        this.resetDistrict();
    }
    private resetDistrict() {
        this.districtList = [];
        this.registerObj.districtId = this.defaultSelect;
        this.resetPincode();
    }
    private resetPincode() {
        this.registerObj.pincode = this.defaultSelect;
    }
    private validatePincode() {
        /*let tempObj = {};
        let outer = this;
        tempObj["pincodeNumber"] = this.registerObj.pincode;
        tempObj["cityId"] = this.registerObj.cityId;
        if (tempObj["pincodeNumber"] != '' && tempObj["cityId"] != '') {
            this.asyncValidate.validate = true;
            this.asyncValidate.dataObj = tempObj;*/
            /*this._webService.serviceCall('post', '/providers/information/pincode', tempObj)
                .subscribe(
                result => {
                    console.log(result);
                },
                err => {
                    console.log(err);
                }
                );*/
        //}

    }
    private getRegisteredData(providerId) {
        let outer = this;
        this.webService.serviceCall('get', this.urlConstants.Mnemonic.Registration.PRV_REG_INF_EDIT + providerId)
            .subscribe(
            result => {
                console.log(result);
                outer.registerObj = outer.sharedMethods.filterObject(outer.registerObj, result);
                if (outer.registerObj.stateId) {
                    outer.getCity(outer.registerObj.stateId);
                }
                outer.populateDropdowns();
            },
            err => {
                console.log(err);
            }
            );
    }
   
    private populateDropdowns() {
        let tempObj: any = {};
        tempObj = this.registerObj;
        this.cityList = [];
        this.districtList = [];
        if (this.registerObj.providerSpecialty.length > 0) {
            if (this.registerObj.additionalDetails.specialtyTypeId == this.specialtyOptions[0].id) {
                this.selectedMultiSpecialtyId = this.sharedMethods.objectToArray(this.registerObj.providerSpecialty, 'specialtyId');
                this.selectedMultiSpecialty = this.sharedMethods.skipId(this.selectedMultiSpecialtyId, this['multiSpecialtyList']);
            } else if (this.registerObj.additionalDetails.specialtyTypeId == this.specialtyOptions[1].id) {
                this.singelSpecVal = this.registerObj.providerSpecialty[0].specialtyId;
            }
        }
        this.populateTagsItems();
    }
    private populateTagsItems() {
        this.alternateNames = this.sharedMethods.objectToArray(this.registerObj.alternateNames, 'alternateName');
        this.landlineNumbers = this.sharedMethods.objectToArray(this.registerObj.landlineNumbers, 'contactNumber');
        this.mobileNumbers = this.sharedMethods.objectToArray(this.registerObj.mobileNumbers, 'contactNumber');
        this.emailAddresses = this.sharedMethods.objectToArray(this.registerObj.emailAddresses, 'emailAddress');

    }
    private addContactDetails(val, toSetProperty) {
        if (toSetProperty != '') {
            let emailFormatError = false;
            let mobileTypeError = false;
            let mobileLengthError = false;
            if (toSetProperty == 'emailAddresses') {
                emailFormatError = !this.sharedMethods.validateEmail(this.emailAddress);
            } else if (toSetProperty == 'mobileNumbers') {
                mobileTypeError = isNaN(this.mobileNumber);
                mobileLengthError = !this.sharedMethods.checkLength(val, 10);
            }
            if (emailFormatError || mobileTypeError || mobileLengthError) {
                if (emailFormatError) {
                    this.openAlertModal("AlertMessage", this.messageConstants.ErrorCode.MSG_17, this.messageConstants.NOTIFYBTN.MSG_01);
                }
                else if (mobileTypeError) {
                    this.openAlertModal("AlertMessage", this.messageConstants.ErrorCode.MSG_18, this.messageConstants.NOTIFYBTN.MSG_01);
                }
                else if (mobileLengthError) {
                    this.openAlertModal("AlertMessage", this.messageConstants.ErrorCode.MSG_19, this.messageConstants.NOTIFYBTN.MSG_01);
                }
            }
            else {
                if (toSetProperty) {
                    if (this[toSetProperty].indexOf(val) == -1) {
                        let tempObj = {}
                        tempObj['contactId'] = null;
                        tempObj['isDeleted'] = 'N';
                        let propNameCheck = 'contactNumber';
                        if (toSetProperty == 'emailAddresses') {
                            propNameCheck = "emailAddress";
                            this.emailAddress = '';
                        } else if (toSetProperty == 'landlineNumbers') {
                            this.landlineCode = '';
                            this.landlineNumber = '';
                        } else if (toSetProperty == 'mobileNumbers') {
                            this.mobileNumber = '';
                        }
                        tempObj[propNameCheck] = val;
                        this.registerObj[toSetProperty].push(tempObj);
                        this[toSetProperty].push(val);
                    }
                    else {
                        console.log(val + ' already added..');
                    }
                }
                else {
                }
            }
        }
    }
    
    private addLandline(code, number) {
        let codeTypeError = isNaN(code);
        let numberTypeError = isNaN(number);
        let codeLengthError = !this.sharedMethods.checkLength(code, 2, 4);
        let numberLengthError = !this.sharedMethods.checkLength(number, 7, 8);
        if (codeTypeError || numberTypeError || codeLengthError || numberLengthError) {
            if (codeTypeError) {
                this.openAlertModal("AlertMessage", this.messageConstants.ErrorCode.MSG_13, this.messageConstants.NOTIFYBTN.MSG_01);
            } else if (numberTypeError) {
                this.openAlertModal("AlertMessage", this.messageConstants.ErrorCode.MSG_14, this.messageConstants.NOTIFYBTN.MSG_01);
            } else if (codeLengthError) {
                this.openAlertModal("AlertMessage", this.messageConstants.ErrorCode.MSG_15, this.messageConstants.NOTIFYBTN.MSG_01);
            } else if (numberLengthError) {
                this.openAlertModal("AlertMessage", this.messageConstants.ErrorCode.MSG_16, this.messageConstants.NOTIFYBTN.MSG_01);
            }
        } else {
            let landlineNumber = code + '-' + number;
            this.landlineCode = "";
            this.landlineNumber = "";
            this.addContactDetails(landlineNumber, 'landlineNumbers');
        }
    }
    private addAlternateName(val) {
        if (this.alternateNames.indexOf(val) == -1) {
            let tempObj = {}
            tempObj['alternateNameId'] = null;
            tempObj['alternateName'] = val;
            tempObj['isDeleted'] = 'N';
            this.registerObj.alternateNames.push(tempObj);
            this.alternateNames.push(val);
        }
        else {
            console.log(val + ' already added..');
        }
    }
    private updateItem(val, toSetProperty, compareWith) {
        //to remove the provider Name if the current deleted tag is provider name
        if (toSetProperty == 'alternateNames' && val == this.registerObj.providerName) {
            this.selectPrefered('');
        }

        let tempObj = this.registerObj[toSetProperty].filter(
            function (item, index, array) {
                if (item[compareWith] == val) {
                    item['isDeleted'] = 'Y';
                    return true;
                }
                else {
                    return false;
                }
            }
        );
        this[toSetProperty] = this[toSetProperty].filter(
            function (item, index, array) {
                return item != val;
            }
        )
    }
    private setIndustryBlacklist(val) {
        this.registerObj.industryBlacklistIndicator = val;
    }
    private setSpecialty(val) {
        let outer = this;
        /*
        *   selectedMultiSpecialtyId ==> multiselectChange([],'multiSpecialty');
        *   singelSpecVal   ==> this.defaultSelect
        *   this.registerObj["providerSpecialty"] ==> []
        *
        */
        this.selectedMultiSpecialtyId = [];
        this.multiselectChange(this.selectedMultiSpecialtyId, 'multiSpecialty');
        this.singelSpecVal = this.defaultSelect;
        this.registerObj["providerSpecialty"] = [];
        this.registerObj.additionalDetails.specialtyTypeId = val;
    }
    private formSubmit(formError) {
            formError.ngSubmit.emit();
            formError._submitted = true;
            if (formError.valid) {
                if (this.privilege.getCurrentTask() == 'prvRegNew') {
                    this.registerObj.transactionMnemonic = 'PRV_MK_REG_SBT';
                    this.registerObj.userName = this.privilege.getLoggedUser();
                    if (this.privilege.getCurrentTaskId() != '') {
                        this.registerObj.taskId = this.privilege.getCurrentTaskId();
                    }
                    this.registerObj.saveFlag = false;
                    this.registerObj.screenName = 'REGISTER';
                    this.registerSubmit();
                }
                else if (this.privilege.getCurrentTask() == 'prvEmpReg') {
                    this.registerObj.transactionMnemonic = 'PRV_MK_EMPL_SBT';
                    this.registerObj.userName = this.privilege.getLoggedUser();
                    this.registerObj.taskId = this.privilege.getCurrentTaskId();
                    this.registerObj.saveFlag = false;
                    this.registerObj.screenName = 'EMPANEL';
                    this.empanelmentSubmit();
                }
                else if (this.privilege.getCurrentTask() == 'prvRegChk') {
                    this.checkerAction.transactionMnemonic = 'PRV_CK_REG_SBT';
                    this.checkerAction.userName = this.privilege.getLoggedUser();
                    this.checkerAction.taskId = this.privilege.getCurrentTaskId();
                    this.checkerAction.providerCode = this.privilege.currentProviderId;
                    if (!this.isRemarkRequired()) {
                        this.openConfirmModal("RequestEmpanel", this.messageConstants.CONFMSG.MSG_09, this.messageConstants.NOTIFYBTN.MSG_02, this.messageConstants.NOTIFYBTN.MSG_03);
                    }
                    else {
                        this.checkerRegisterSubmit();
                    }
                }
            } else {
                this.openAlertModal("AlertMessage", this.messageConstants.ErrorCode.MSG_12, this.messageConstants.NOTIFYBTN.MSG_01);
            }
    }
    private empanelmentSubmit() {
        this.postRegisteration('put');
    }
    private checkerRegisterSubmit() {
        let outer = this;
        this.webService.serviceCall('put', this.urlConstants.Mnemonic.Registration.PRV_REG_STATUS, this.checkerAction)
            .subscribe(
            result => {
                console.log(result);
                if (!outer.isRemarkRequired()) {
                    let providerCode = "AH08052015";
                    let providerCount = "4501th";
                    outer.openAlertModal("checkerSubmit", outer.messageConstants.CONFMSG.MSG_08 + result + ".", outer.messageConstants.NOTIFYBTN.MSG_05);
                } else {
                    outer.openAlertModal("checkerSubmit", outer.messageConstants.CONFMSG.MSG_07, outer.messageConstants.NOTIFYBTN.MSG_05);
                }
            },
            err => {
                console.log(err);
            }
            );
    }
    private registerSubmit() {
        this.registerObj["userName"] = this.privilege.getLoggedUser();
        let method = this.privilege.currentProviderId == '' ? 'post' : 'put';
        this.postRegisteration(method);
    }
    private updateRegisteration() {
        let outer = this;
        this.webService.serviceCall('put', this.urlConstants.Mnemonic.Registration.PRV_REG_INF, this.registerObj)
            .subscribe(
            result => {
                console.log(result);
                if (outer.privilege.getCurrentTask() == "prvEmpReg") {
                    outer.openAlertModal("RaiseEmpanel", outer.messageConstants.CONFMSG.MSG_04, outer.messageConstants.NOTIFYBTN.MSG_05);
                }else{
                    outer.openAlertModal("UpdateRegister", outer.messageConstants.CONFMSG.MSG_06, outer.messageConstants.NOTIFYBTN.MSG_05);
                }
            },
            err => {
                console.log(err);
            }
            );
    }
    private postRegisteration(method) {
        let outer = this;
        this.webService.serviceCall(method, this.urlConstants.Mnemonic.Registration.PRV_REG_INF, this.registerObj)
            .subscribe(
            result => {
                console.log(result);
                if (outer.privilege.getCurrentTask() == "prvEmpReg") {
                    outer.openAlertModal("RaiseEmpanel", outer.messageConstants.CONFMSG.MSG_04, outer.messageConstants.NOTIFYBTN.MSG_05);
                }else {
                    outer.openAlertModal("NewRegister", outer.messageConstants.CONFMSG.MSG_03, outer.messageConstants.NOTIFYBTN.MSG_05);
                }
            },
            err => {
                console.log(err);
            }
            );
    }
    private modalClosed(eventObj) {
        if (eventObj.purpose == "RequestEmpanel") {
            if (eventObj.closedBy == 'No') {
                this.checkerAction.empanelmentFlag = false;
                this.checkerRegisterSubmit();
            } else if (eventObj.closedBy == 'Yes') {
                this.checkerAction.empanelmentFlag = true;
                this.checkerRegisterSubmit();
            }
        } else if (eventObj.purpose == "Confirm Cancel") {
            if (eventObj.closedBy == 'Yes') {
                this.router.navigate(['amhi/dashboard']);
            }
        } else if (eventObj.purpose == "AlertMessage") {
            if (this.notifyBody == this.messageConstants.ErrorCode.MSG_12) {
                this.setFocusToError();
            }
        } else {
            this.router.navigate(['amhi/dashboard']);
        }
    }
    private validateData(val) {
        if (val == '' || val == null || val == 'undefined') {
            console.log("please enter allmandatory fileds");
            return false;
        }
        return true;
    }
    private verifyOTP(val) {
    }
    private resendOTP(val) {
    }
    private validateContact(val, obj) {
        obj.verified = '';
        if (val == 'verified') {
            obj.verified = true;
        }
        if (val == 'verify') {
            obj.verified = false;
        }
    }
    private riseEmpanelReq() {
        this.riseEmpanel = true;
        this.registerObj.requestSourceId = this.defaultSelect;
        this.privilege.setCurrentTask('prvEmpReg');
    }

    /*
    MultiSelect start
    */
    private multiselectChange(event, genericName) {
        this.sharedMethods.multiselectChangeCommon(this,event,genericName);
        if (genericName == "multiSpecialty") {
            this.registerObj["providerSpecialty"] = this.addProviderSpecialty(this['selected' + this.sharedMethods.capitalizeFirstLetter(genericName) + 'Id'])
        }
    }
    private removeTag(event, genericName) {
        this.sharedMethods.removeTagCommon(this, event, genericName);
        if (genericName == "multiSpecialty") {
            this.registerObj["providerSpecialty"] = this.addProviderSpecialty(this['selected' + this.sharedMethods.capitalizeFirstLetter(genericName) + 'Id'])
        }
    }
    /*
    MultiSelect end
    */

    private assingAlertNotifyModal(modal) {
        this.alertNotifyModal = modal;
    }
    private assingConfirmNotifyModal(modal) {
        this.confirmNotifyModal = modal;
    }
    private isReasonVisible() {
        if (this.registerObj.actionTakenId && this.registerObj.actionTakenId != '') {
            let outer = this;
            let selectedObj = this.empanelActionList.find(function (item, index, arr) {
                return outer.registerObj.actionTakenId == item.actionTakenId;
            });
            if (selectedObj.actionTakenName == "Rejected" || selectedObj.actionTakenName == "On Hold") {
                return true;
            } else {
                outer.registerObj.reasonId = '';
                return false;
            }
        }
    }
    private isRemarkRequired() {
        if (this.checkerAction.actionTakenId && this.checkerAction.actionTakenId != '') {
            let outer = this;
            let selectedObj = this.registerActionList.find(function (item, index, arr) {
                return outer.checkerAction.actionTakenId == item.actionTakenId;
            });
            if (selectedObj.actionTakenName == "Sent Back") {
                return true;
            } else {
                return false;
            }
        }
    }

    private cancelBtn() {
        this.openConfirmModal("Confirm Cancel", this.messageConstants.CONFMSG.MSG_01, this.messageConstants.NOTIFYBTN.MSG_02, this.messageConstants.NOTIFYBTN.MSG_03);
    }
    private openAlertModal(notifyPurpose, notifyBody, notifyBtn){
        this.configNotifyModal(notifyPurpose, notifyBody, notifyBtn);
        this.alertNotifyModal.open();
    }
    private openConfirmModal(notifyPurpose, notifyBody, notifyBtn1, notifyBtn2){
        this.configNotifyModal(notifyPurpose, notifyBody, notifyBtn1, notifyBtn2);
        this.confirmNotifyModal.open();
    }
    private configNotifyModal(notifyPurpose, notifyBody, notifyBtn1, notifyBtn2?){
        this.notifyPurpose = notifyPurpose;
        this.notifyBody = notifyBody;
        this.notifyBtn1 = notifyBtn1;
        if(notifyBtn2)
        this.notifyBtn2 = notifyBtn2;
    }

}