import { Router, ActivatedRoute } from '@angular/router';
import { PRODUCT_MENU } from './amhi/amhi.menu';
import { DEMO_MENU } from './demo/demo.menu';

//var ACTIVE_MENU: any;
//
//ACTIVE_MENU = PRODUCT_MENU;
//
//export const MENU = [
//    ...ACTIVE_MENU
//];

var ACTIVE_MENU: any;

var pathArray = window.location.hash.split('/');
var second = pathArray[1];
console.log(pathArray[1]);
if (second === 'demo') {
    ACTIVE_MENU = DEMO_MENU;
} else {
    ACTIVE_MENU = PRODUCT_MENU;
}
export const MENU = [
    ...ACTIVE_MENU
];
