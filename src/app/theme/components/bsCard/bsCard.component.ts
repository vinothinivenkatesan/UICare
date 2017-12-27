import {Component, ViewEncapsulation, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'bs-card',
  styles: [require('./bsCard.scss')],
  template: require('./bsCard.html'),
  encapsulation: ViewEncapsulation.None
})
export class BsCard {
  @Input() title:String;
  @Input() bsCardClass:String;
}
