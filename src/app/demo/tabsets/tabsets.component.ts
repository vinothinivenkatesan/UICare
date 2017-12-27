import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'tabsets',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./tabsets.scss')],
  template: require('./tabsets.html')
})
export class Tabsets {

  constructor() {
  }
     
     public tabs: any[] = [
    {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
    {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true},
    {title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true}
  ];
 
  public setActiveTab(index: number): void {
    this.tabs[index].active = true;
  }
 
  public removeTabHandler(/*tab:any*/): void {
    console.log('Remove Tab handler');
  }


}
