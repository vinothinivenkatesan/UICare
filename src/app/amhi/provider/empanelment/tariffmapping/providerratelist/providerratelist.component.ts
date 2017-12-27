import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'provider-rate-list',
    encapsulation: ViewEncapsulation.None,
    template: require('./providerratelist.html'),
    styles: [require('./providerratelist.scss')]
})

export class ProviderRateListComponent{
    private searchObj = {
        searhNetID: ""
    }
    private rateObj = {
        rateName: "",
        networkRate: "1",
        networkName: "",
        networkID: ""
    }

    private networkRateOptions = [{id:'1',name:'Yes'},{id:0,name:'No'}];

    onToggle($event){

    }

    showNetworkNames(){

    }
    
    showNetworkIDs(){

    }
    lookUpClosed($event){

    }
}
