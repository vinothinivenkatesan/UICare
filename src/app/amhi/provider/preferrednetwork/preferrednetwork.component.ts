import { Component, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { GtConfig, GenericTableComponent, GtInformation } from 'angular-generic-table';
import { Router } from '@angular/router';

@Component({
    selector: 'preferred-network',
    encapsulation: ViewEncapsulation.None,
    template: require('./preferrednetwork.html'),
    styles: [require('./preferrednetwork.scss')]
})

export class Preferrednetwork {
    public advSearchPanel: boolean = false;
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
                    objectKey: "networkId",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 2,
                    objectKey: "networkName",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 3,
                    objectKey: "networkType",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 4,
                    objectKey: "networkPurpose",
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
                    name: "Network ID",
                    objectKey: "networkId"
                },
                {
                    name: "Network Name",
                    objectKey: "networkName"
                },
                {
                    name: "Type of Network",
                    objectKey: "networkType"
                },
                {
                    name: "Purpose of Network",
                    objectKey: "networkPurpose"
                }
            ],
            data: []
        }
    }
}