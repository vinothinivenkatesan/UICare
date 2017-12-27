import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'provider-service-tariffmap',
    encapsulation: ViewEncapsulation.None,
    template: require('./providerservicetariffmap.html'),
    styles: [require('./providerservicetariffmap.scss')]
})

export class ProviderServicetariffmapComponent{
   
    private providerServiceTariff = [];
}
