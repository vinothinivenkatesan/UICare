import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'investigation',
    encapsulation: ViewEncapsulation.None,
    template: require('./investigation.html'),
    styles: [require('./investigation.scss')]
})

export class InvestigationComponent{
    private proDepCategoryList = [];
    private amhiDepCategoryList = [];
    private proDepSubCategoryList = [];
    private amhiDepSubCategoryList = [];
    private proPackNameList = [];
    private amhiPackNameList = [];
    private amhiPackCodeList = [];
    private proPackDetNameList = [];
    private amhiPackDetNameList = [];
    private proPackDetCodeList = [];
    private amhiPackDetCodeList = [];

    private investigationObj = {
        proDepCategory: "",
        amhiDepCategory: "",
        proDepSubCategory: "",
        amhiDepSubCategory: "",
        proPackName: "",
        amhiPackName: "",
        proPackCode: "",
        amhiPackCode: "",
        icdCode: "",
        cptpcsCode:"",
        proPackDetName: "",
        amhiPackDetName: "",
        proPackDetCode: "",
        amhiPackDetCode: ""
    }

    private proRoomTypeList = [];
    private amhiRoomTypeList = [];
    private packincItemList = [];
    private packexcItemList = [];
    private uploadDetails = [];

    private packageDetailObj = {
        toggleValue: "1",
        proRoomType: "",
        amhiRoomType: "",
        lenStay: "",
        rateByondLOS: "",
        discountPerc: "",
        discountAmt: "",
        packincItem: '',
        packexcItem: ""
    }

    showICDCode(){

    }
    showCPT_PCS_Code(){

    }
    addLimit(){

    }
}
