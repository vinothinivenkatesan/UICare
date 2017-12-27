import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'prl-room-rent',
    encapsulation: ViewEncapsulation.None,
    template: require('./prlroomrent.html'),
    styles: [require('./prlroomrent.scss')]
})

export class PRLRoomRentComponent{
    
    private prlRoomObj = {
        proRoomName: "",
        proRoomCode: "",
        amhiRoomName: "",
        amhiRoomCode: ""        
    }
    private discountObj = {
        discountPercent: "",
        discountAmt: ""
    }
    private proRoomNameList = [];
    private proRoomCodeList = [];
    private amhiRoomNameList = [];
    private amhiRoomCodeList = [];
    private excItemList = [];
    private incItemList = [];
    
    private incObj = {
        incItem: "",
        excItem: ""
    }

    private limitApplicable = "1";
    private isDiscountAvail = "1";

    private savedRoomDetails = [];

    onToggle(){

    }

    addLimit(){

    }
}
