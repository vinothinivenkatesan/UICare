import { Component } from '@angular/core';

@Component({
    selector: 'pagination',
    template: '<ngb-pagination [collectionSize]="70" [(page)]="page"></ngb-pagination>',
})
export class Pagination {
    page: number = 4;
    constructor() {
    }
}
