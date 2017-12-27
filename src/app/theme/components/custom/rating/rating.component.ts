import { Component } from '@angular/core';

@Component({
    selector: 'rating',
    templateUrl: './rating.html'    
})
export class Rating {
    public ratingoptions: any = "6";
    public rates: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    constructor() {
    }

}
