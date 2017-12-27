import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'room-rent',
    encapsulation: ViewEncapsulation.None,
    template: require('./roomrent.html'),
    styles: [require('./roomrent.scss')]
})

export class RoomRentComponent{
    private savedRoomDetails = [];
    private roomObj = {
        name: "",
        code: "",
        rate: ""
    }
}
