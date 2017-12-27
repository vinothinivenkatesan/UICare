import { Component, ViewEncapsulation, ViewChild, OnInit} from '@angular/core';
import { GtConfig, GenericTableComponent, GtInformation } from 'angular-generic-table';

@Component({
    selector: 'communication',
    encapsulation: ViewEncapsulation.None,
    template: require('./communication.html'),
    styles: [require('./communication.scss')]
})
export class Communication {
    public configObject: GtConfig<any>;
    @ViewChild(GenericTableComponent)
    private myTable: GenericTableComponent<any, any>;

    constructor() {
        this.assignConfigObject();
    }
    private assignConfigObject() {
        this.configObject = {
            settings: [
                {
                    columnOrder: 0,
                    objectKey: "id",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 1,
                    objectKey: "communicationEvent",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 2,
                    objectKey: "communicationMode",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 3,
                    objectKey: "message",
                    search: true,
                    sort: "enable",
                    visible: true
                }
            ],
            fields: [
                {
                    name: "#",
                    objectKey: "id"
                },
                {
                    name: "Communication Event",
                    objectKey: "communicationEvent",
                },
                {
                    name: "Communication Mode",
                    objectKey: "communicationMode"
                },
                {
                    name: "Message",
                    objectKey: "message"
                }
            ],
            data: [
                {
                    id:0,
                    communicationEvent:"New Product",
                    communicationMode:"Email",
                    message:"My Message 1",
                },
                {
                    id:1,
                    communicationEvent:"New Event",
                    communicationMode:"SMS",
                    message:"My Message 2",
                }
            ]
        }
    }
    
}