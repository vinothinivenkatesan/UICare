import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'implant-consume',
    encapsulation: ViewEncapsulation.None,
    template: require('./implantconsume.html'),
    styles: [require('./implantconsume.scss')]
})

export class ImplantConsumeComponent{
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

    private implantConsumeObj = {
        proDepCategory: "",
        amhiPackRate: ""
    }

    private proRoomTypeList = [];
    private amhiRoomTypeList = [];
    private packincItemList = [];
    private packexcItemList = [];
    private uploadDetails = [];

    private implantConsumeDetailObj = {
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
