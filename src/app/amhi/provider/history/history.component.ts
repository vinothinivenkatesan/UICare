import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'history',
    encapsulation: ViewEncapsulation.None,
    template: require('./history.html'),
    styles: [require('./history.scss')]
})
export class History {

    summary: any = false;
    contact: any = false;
    documents: any = false;
    selectTab(selected) {
        console.log('clicked');
        if (selected == "summary") {
            this.summary = true;
        } else {
            this.summary = false;
        }
        if (selected == "contact") {
            console.log(selected);
            this.contact = true;
        } else {
            this.contact = false;
        }
        if (selected == "documents") {
            console.log(selected);
            this.documents = true;
        } else {
            this.documents = false;
        }
    }
}