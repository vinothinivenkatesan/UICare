import { Component } from '@angular/core';

@Component({
    selector: 'tag-inputs',
    template:  `<tag-input [(ngModel)]='items'></tag-input>`
})

export class TagInputs {
    items = ['Pizza', 'Pasta', 'Parmesan'];
    options = {
        placeholder: "+ term",
        secondaryPlaceholder: "Enter a new term",
        separatorKeys: [4, 5],
        maxItems: 10
    }
    onItemAdded(item) {
        console.log(`${item} has been added`);
    }
    onItemRemoved(item) {
        console.log(`${item} has been removed :(`);
    }
}

