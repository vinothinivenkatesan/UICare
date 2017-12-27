import { Injectable } from '@angular/core';

@Injectable()
export class GlobalURLConstants {
    public root_path: string;
    public Mnemonic: any;
    constructor() {
        this.root_path = 'http://10.24.142.53:8080/CAREBusinessServices/providers/';
        this.Mnemonic = {

        }
    }
    public GetMnemonicWithParams(param: string, value: any): string {
        switch (param) {
            case 'DASH_LIST':
                return this.root_path + 'dashboard/tasklist/' + value
        }
    }
}