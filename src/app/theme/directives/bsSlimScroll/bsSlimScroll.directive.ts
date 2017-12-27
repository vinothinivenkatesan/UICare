import {Directive, Input, Output, ElementRef, EventEmitter} from '@angular/core';

import './bsSlimScroll.loader.ts';

@Directive({
  selector: '[bsSlimScroll]'
})
export class BsSlimScroll {

  @Input() public bsSlimScrollOptions:Object;

  constructor(private _elementRef:ElementRef) {
  }

  ngOnChanges(changes) {
    this._scroll();
  }

  private _scroll() {
    this._destroy();
    this._init();
  }

  private _init() {
    jQuery(this._elementRef.nativeElement).slimScroll(this.bsSlimScrollOptions);
  }

  private _destroy() {
    jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });
  }
}
