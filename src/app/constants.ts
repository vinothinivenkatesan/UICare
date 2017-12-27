import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    root_path: string;

    constructor() {
        // this.root_path = 'http://localhost:3001'
        this.root_path = 'http://10.24.142.53:8080/CAREBusinessServices'
        //  this.root_path = 'http://10.242.108.7:8080'
        // this.root_path = 'http://10.24.142.53:8080/CAREBusinessServices'
    }
}
