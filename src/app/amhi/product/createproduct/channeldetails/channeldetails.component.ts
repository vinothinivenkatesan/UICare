import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ChanneldetailsService } from './channeldetails.service';

@Component({
    selector: 'channel-details',
    encapsulation: ViewEncapsulation.None,
    template: require('./channeldetails.html'),
    styles: [require('./channeldetails.scss')]
})
export class Channeldetails implements OnInit {

    public result: any;
    public channels: any;
    public defaultSelect:string="";

    constructor(private channeldetailsService: ChanneldetailsService) {
    }

    ngOnInit() {
        this.channels =  [
                {
                    "channelId": "1",
                    "channelName": "Online"
                },
                {
                    "channelId": "2",
                    "channelName": "Bank"
                },
                {
                    "channelId": "3",
                    "channelName": "Offline"
                },
                {
                    "channelId": "4",
                    "channelName": "TPA"
                }
            ];

    }

    loadChannel() {
        this.channeldetailsService.getChannel()
            .subscribe(
            results => {
                this.result = results;
                this.channels = this.result.channels;
                console.log(this.result.channels);
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            });
    }
}
