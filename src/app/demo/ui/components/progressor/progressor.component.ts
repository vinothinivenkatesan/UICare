import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'progressor',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./progressor.scss')],
  template: require('./progressor.html'),
})
export class Progressor {


  constructor() {
  }

}
