import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'tooltip',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./tooltip.scss')],
  template: require('./tooltip.html'),
})
export class Tooltip {


  constructor() {
  }

  ngOnInit() {
  }
}
