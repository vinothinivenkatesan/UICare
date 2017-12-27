import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'editor',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./editor.scss')],
    template: require('./editor.html')
})
export class Editor {
    public content: any;
    constructor() {
        this.content = '<p>Hello <strong>World !</strong></p>'
    }


}
