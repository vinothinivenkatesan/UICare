import { Component } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

@Component({
    selector: 'multiselect-inputs',
    template: `<ss-multiselect-dropdown [options]="myOptions" [(ngModel)]="selectedOptions" (ngModelChange)="onChange(selectedOptions)"></ss-multiselect-dropdown>`,
})

export class MultiSelectInputs {
    public selectedOptions: number[];
    public myOptions: IMultiSelectOption[] = [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
    ];

    onChange(selectedOptions) {
        console.log(selectedOptions);
    }

    constructor() {
    }
}