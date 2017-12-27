import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'provider-service-details',
    encapsulation: ViewEncapsulation.None,
    template: require('./providerservicedetails.html'),
    styles: [require('./providerservicedetails.scss')]
})

export class ProviderServiceDetailsComponent{
    private defaultSelect:string = "";
    private itemCategoryList = [];
    private providerServiceDetails = [];
    private providerObj = {
        category: "",
        subCategory: "",
        serviceName: "",
        serviceCode: ""
    }
}