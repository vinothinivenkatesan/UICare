import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'custom-modal',
    encapsulation: ViewEncapsulation.None,
    template: require('./custommodal.html'),
})
export class Custommodal {
    @Input() notificationPurpose: any='';
    @Input() modalHeader: any;
    @Input() modalBody: any;
    @Input() modalType: any = 'customBodyContent';
    @Input() buttonText1: any = 'Cancel';
    @Input() buttonText2: any = "Ok";
    @Input() buttonText3: any = "";
    @Input() buttonText: any = "Close";
    @Output() onModalClose: EventEmitter<any> = new EventEmitter();
    constructor() { }
    public modalObj: any;
    public modelAssingedFlag = false;
    assignModalRef(mdModal) {
        this.modalObj = mdModal;
        this.modelAssingedFlag = true;
    }
    open() {
        if (this.modelAssingedFlag) {
            console.log(this);
            this.modalObj.show();
        }
    }
    close(buttonText) {
        if (this.modelAssingedFlag) {
            let emitObj={
                            "closedBy":buttonText,
                            "purpose":this.notificationPurpose
                        };
            this.onModalClose.emit(emitObj);
            this.modalObj.hide();
        }
    }

}
