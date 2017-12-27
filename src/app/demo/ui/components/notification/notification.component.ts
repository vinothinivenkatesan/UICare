import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'notification-component',
    template: require('./notification.html')
})
export class Notification {

    constructor(public toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);
    }

    showSuccess() {
        this.toastr.success('You are awesome!', 'Success!', { toastLife: 3000 });
    }

    showError() {
        this.toastr.error('This is not good!', 'Oops!');
    }

    showWarning() {
        this.toastr.warning('You are being warned.', 'Alert!');
    }

    showInfo() {
        this.toastr.info('Just some information for you.');
    }

    showClickToDismiss() {
        this.toastr.info('Please click to dismiss', 'No auto dismiss', { dismiss: 'click' });
    }

    showCustomLife() {
        this.toastr.warning('The toast will auto dismiss in 8 seconds', null, { toastLife: 8000 });
    }

    showCustomHTML() {
        this.toastr.custom('<span style="color: #bd362f">This message should be in red with blank background. Click to dismiss.</span>',
            'Custom Message', { enableHTML: true, dismiss: 'click' });
        this.toastr.info('<span style="color: #bd362f">This should be red, </span><br/><span style="color: #bd362f">and multi-line message.</span>',
            'Custom Information Message', { enableHTML: true, toastLife: 5000 });
    }

}