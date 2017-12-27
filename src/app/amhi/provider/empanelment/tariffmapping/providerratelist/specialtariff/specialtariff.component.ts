import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'special-tariff',
    encapsulation: ViewEncapsulation.None,
    template: require('./specialtariff.html'),
    styles: [require('./specialtariff.scss')]
})

export class SpecialTariffComponent{
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

    private specialTariffObj = {
        proDepCategory: "",
        amhiPackRate: ""
    }

    private proRoomTypeList = [];
    private amhiRoomTypeList = [];
    private packincItemList = [];
    private packexcItemList = [];
    private uploadDetails = [];
    private applicTo = [];

    private specialTariffDetailObj = {
        toggleValue: "1",
        proRoomType: "",
        amhiRoomType: "",
        lenStay: "",
        rateByondLOS: "",
        discountPerc: "",
        discountAmt: "",
        packincItem: '',
        packexcItem: "",
        origProCharge: "",
        origEmerCharge: "",
        halfDayCharge: "",
        fromTime: "",
        toTime: "",
        hourRate: "",
        feeBasisOT: "",
        feeBasis: "",
        feeBasisAss:"",
        feeBasisAnes:"",
        hourRateAnes:"",
        feeBasisAssAnes:"",
        hourPercAssAnes:"",
        hourPro:"",
        hourPro2nd:"",
        hourSubPro:"",
        dayRangeFrom:"",
        dayRangeTo:"",
        tarifCalcBasis:"",
        guideDesc:"",
        applicTo:""
    }

    showICDCode(){

    }
    showCPT_PCS_Code(){

    }
    addLimit(){

    }
}
