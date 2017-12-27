import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'mega-menu',
    encapsulation: ViewEncapsulation.None,
    template: require('./megamenu.html'),
    styles: [require('./megamenu.scss')]
})
export class Megamenu {
    @Input() patch;
    patchFor:string = (this.patch) ?  this.patch : "al-main";

    summary: any = false;
    contact: any = false;
    documents: any = false; 

    onMenuClick(event) {
        event.stopPropagation();
    }
    doSomeActionOnOpen(){
        console.log("opened")
    }
    doSomeActionOnClose(){
        console.log("closed")
    }
    selectTab(event,selected) {
        console.log('clicked');
       event.preventDefault();
       
        
        let isOpened = event.currentTarget.classList.contains('open');
         console.log(selected);
        if (selected == "summary") {
            this.summary = !isOpened;
        } else {
            this.summary = false;
        }
        if (selected == "contact") {
           
            this.contact = !isOpened;
        } else {
            this.contact = false;
        }
        if (selected == "documents") {
            
            this.documents = !isOpened;
        } else {
            this.documents = false;
        }
        if(this.patchFor){
            let patchtarget = document.getElementsByClassName(this.patchFor)[0];
            if(this.summary || this.contact || this.documents){
                if(!patchtarget.classList.contains('patch'))
                patchtarget.classList.add("patch");
            }else{
                patchtarget.classList.remove("patch");
            }
        }
    }
}