import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { GlobalState } from '../../../global.state';

@Component({
    selector: 'bs-content-top',
    styles: [require('./bsContentTop.scss')],
    template: require('./bsContentTop.html'),
})
export class BsContentTop {

    public activePageTitle: string = '';
    public parentTitle: string = '';
    public childTitle: string = '';
    public secondparentTitle: string = '';
    public root: string = '';

    constructor(private _state: GlobalState, public router: Router) {
        router.events.forEach((event) => {
            if (event instanceof NavigationEnd) {
                var pathArray = window.location.hash.split('/');
                if (pathArray) {
                    let count = pathArray.length;
                    if (pathArray.length == 4) {
                        this.secondparentTitle = '';
                        this.parentTitle = pathArray[count - 2];
                        this.childTitle = pathArray[count - 1];
                        this.root = pathArray[count - 2];
                        this.changeTitle(this.childTitle);
                    } else if (pathArray.length == 5) {
                        this.parentTitle = pathArray[count - 3];
                        this.secondparentTitle = pathArray[count - 2];
                        this.childTitle = pathArray[count - 1];
                        this.root = pathArray[count - 3];
                        this.changeTitle(this.childTitle);
                    } else {
                        let childcount = count - 1;
                        this.parentTitle = '';
                        this.secondparentTitle = '';
                        this.childTitle = pathArray[childcount];
                        this.root = pathArray[count - 2];
                    }

                }
            }
        });

    }

    public changeTitle(childTitle) {
        switch (childTitle) {
            case 'register':
                this.childTitle = 'Provider Registration';
                break;
            case 'empanelment':
                this.childTitle = 'Provider Empanelment';
                break;
            case 'createproduct':
                this.childTitle = 'Create New Product';
                break;
            case 'preferrednetwork':
                this.childTitle = 'Preferred Network';
                break;
            case 'createnetwork':
                this.childTitle = 'Network Creation';
                break;
            case 'tariffcomparision':
                this.childTitle = 'Tariff Comparision';
                break;
            default:
                break;
        }
    }

}
