import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'line-item',
    encapsulation: ViewEncapsulation.None,
    template: require('./lineitem.html'),
    styles: [require('./lineitem.scss')]
})

export class LineItemComponent{
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

    private lineItemObj = {
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

    private lineItemDetailObj = {
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
