import { Component, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { ScrollTab } from './scrollTab/scrollTab.component';

@Component({
    selector: 'scroll-tabs',
    template: require('./scrollTabs.html'),
    host: {
        '(document:click)': 'onClick($event)',
    },
})

export class ScrollTabs {
    constructor(public element: ElementRef) {
        this.element.nativeElement // <- your direct element reference 
    }
    tabs: ScrollTab[] = [];

    addTab(tab: ScrollTab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }

    selectTab(tab: ScrollTab) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
        tab.active = true;
        jQuery('.scroll-tab-dropdown').fadeOut('fast');
    }
    public hidWidth: number;
    @ViewChild('wrapper') div;
    public ngOnInit(): void {
        var el = this.element.nativeElement;
        console.log(this.widthOfHidden());
        console.log(jQuery(document.getElementsByClassName('nav-item')));
    }
    public ngAfterViewInit(): void {
        this.widthOfList();
        this.reAdjust();
    }
    public widthOfList() {
        var itemsWidth = 0;
        var links = document.getElementById("ul-nav").getElementsByTagName("li");
        for (var i = 0; i < links.length; i++) {

            var itemWidth = links[i].offsetWidth;
            itemsWidth += itemWidth;
        }
        return itemsWidth;
    }

    public getLeftPosi() {
        return jQuery("#ul-nav").position().left;
    };

    public widthOfHidden() {
        var scrollBarWidths = 40;
        return ((this.div.nativeElement.offsetWidth) - this.widthOfList() - this.getLeftPosi()) - scrollBarWidths;
    };

    public reAdjust() {
        if ((this.div.nativeElement.offsetWidth) < this.widthOfList()) {
            jQuery(document.querySelector('.scroller-right')).show();
            jQuery(document.querySelector('.scroller-down')).show();
        }
        else {
            jQuery(document.querySelector('.scroller-right')).hide();
            jQuery(document.querySelector('.scroller-down')).hide();
        }

        if (this.getLeftPosi() < 0) {
            jQuery(document.querySelector('.scroller-left')).show();
        }
        else {
            jQuery(document.querySelector('ul')).animate({ left: "-=" + this.getLeftPosi() + "px" }, 'slow');
            jQuery(document.querySelector('.scroller-left')).hide();
        }
    }
    public moveLeft(): void {
        jQuery('.scroller-right').fadeIn('slow');
        jQuery('.scroller-down').fadeIn('slow');
        jQuery('.scroller-left').fadeOut('slow');
        jQuery('#ul-nav').animate({ left: "-=" + this.getLeftPosi() + "px" }, 'slow', function() {
        });
        console.log('leftpos' + this.getLeftPosi());
    }
    public moveRight(): void {
        jQuery('.scroller-left').fadeIn('slow');
        jQuery('.scroller-right').fadeOut('slow');
        jQuery('.scroller-down').fadeOut('slow');
        jQuery('#ul-nav').animate({ left: "+=" + this.widthOfHidden() + "px" }, 'slow', function() {
        });
        console.log('widthOfHidden' + this.widthOfHidden());
    }

    public moveDown(): void {
        jQuery('.scroll-tab-dropdown').toggle();
    }

    public onClick(event) {
        if (!this.element.nativeElement.contains(event.target)) // or some similar check
            jQuery('.scroll-tab-dropdown').fadeOut('fast');
    }

}
