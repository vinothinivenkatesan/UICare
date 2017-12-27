import { Component, ViewEncapsulation } from '@angular/core';
import { Privileges } from './../../services/privileges/privileges.service';
import { GlobalState } from '../../../global.state';

@Component({
    selector: 'bs-page-top',
    styles: [require('./bsPageTop.scss')],
    template: require('./bsPageTop.html'),
    encapsulation: ViewEncapsulation.None
})
export class BsPageTop {
    public userName:any;
    public isScrolled: boolean = false;
    public isMenuCollapsed: boolean = false;

    constructor(private _state: GlobalState, private _privilege: Privileges) {
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
       this.userName = this._privilege.getLoggedUser();
    }

    public toggleMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
        return false;
    }

    public scrolledChanged(isScrolled) {
        this.isScrolled = isScrolled;
        /*- Below 2 lines added for collapsing menu -*/
        //        this.isMenuCollapsed = !this.isMenuCollapsed;
        //        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    }

    public signout() {
        localStorage.clear();
    }
}
