import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'actual-item',
    encapsulation: ViewEncapsulation.None,
    template: require('./actualitem.html'),
    styles: [require('./actualitem.scss')]
})

export class ActualItemComponent{
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

    private actualItemObj = {
        proDepCategory: "",
        amhiPackRate: ""
    }

    private proRoomTypeList = [];
    private amhiRoomTypeList = [];
    private packincItemList = [];
    private packexcItemList = [];
    private uploadDetails = [];

    private actualItemDetailObj = {
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
