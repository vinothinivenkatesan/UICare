import { Component } from '@angular/core';

@Component({
    selector: 'paginations',
    templateUrl: './paginations.html'
})
export class Paginations {
    public totalItems: number = 64;
    public currentPage: number = 4;
    public smallnumPages: number = 0;

    public setPage(pageNo: number): void {
        this.currentPage = pageNo;
    }

    public pageChanged(event: any): void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    }
    constructor() {
    }
}
