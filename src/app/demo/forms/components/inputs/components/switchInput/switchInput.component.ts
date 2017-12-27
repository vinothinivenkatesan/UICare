import { Component } from '@angular/core';

@Component({
    selector: 'switch-input',
    template: `<bSwitch 
      [switch-animate]="toggle" [(ngModel)]="state"
       [switch-base-class]="'bootstrap-switch'"
       [switch-on-color]="success"
       [switch-inverse]="OFF"
       [switch-indeterminate]="ON"
        (onChangeState)="onChange($event)"> 
        </bSwitch> `,
})
export class SwitchInput {
     public state: any=true;
    constructor() {

    }
    onChange() { }
}
