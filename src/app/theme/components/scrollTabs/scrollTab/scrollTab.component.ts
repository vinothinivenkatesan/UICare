import { Component, Input } from '@angular/core';
import { ScrollTabs } from './../scrollTabs.component';

@Component({
    selector: 'scroll-tab',
    template: require('./scrollTab.html')
})

export class ScrollTab {
    @Input() tabTitle;
    active: boolean = false;
    constructor(tabs: ScrollTabs) {
        tabs.addTab(this)
    }
}
