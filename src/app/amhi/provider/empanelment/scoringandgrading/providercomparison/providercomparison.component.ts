import { Component, ViewEncapsulation} from '@angular/core';
import {IMultiSelectOption,IMultiSelectTexts,IMultiSelectSettings} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import {NgbModal, NgbActiveModal, NgbModalOptions, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
//import { Home } from '../../../home';


@Component({
    selector: 'provider-comparison',
    encapsulation: ViewEncapsulation.None,
    template: require('./providercomparison.html'),
    styles: [require('./providercomparison.scss')]
})
export class Providercomparison {
    
    constructor(private modalService: NgbModal) {
        
    }
    /*open() {
        const modalRef = this.modalService.open(Home);
    }*/
    public closeResult='';
    public options:NgbModalOptions = {size:'lg'};
    open(val) {
        this.modalService.open(val, this.options).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;console.log(result);
        }, (reason) => {
          this.closeResult = `Dismissed ${reason}`; console.log(reason);
        });
    }
    public selectedOptions:number[];
    public gradeParam: IMultiSelectOption[] = [
        { id: 1, name: 'Exclusion 1 / Testarea' },
        { id: 2, name: 'Exclusion 2' },
        { id: 3, name: 'Exclusion 3' },
        { id: 4, name: 'Exclusion 4' },
        { id: 5, name: 'Exclusion 5' },
        { id: 6, name: 'Exclusion 6' }
      ];
    public onParamChange(val){
        
    }
    
}