import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'tabs',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./tabs.scss')],
  template: require('./tabs.html')
})
export class Tabs {

  constructor() {
  }
  
  
    public groups: Array<any> = [
        {
            id: '1',
            title: 'Dynamic Group Header - 1',
            content: 'Dynamic Group Body - 1',
            status: false
        },
        {
            id: '2',
            title: 'Dynamic Group Header - 2',
            content: 'Dynamic Group Body - 2',
            status: false
        }
    ];


}
