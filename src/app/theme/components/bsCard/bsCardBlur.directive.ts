import {Directive, ElementRef, HostListener, HostBinding} from '@angular/core';
import {BsThemeConfigProvider} from '../../../theme';

import {BsCardBlurHelper} from './bsCardBlurHelper.service';
import {BgMetrics} from './bgMetrics';

@Directive({
  selector: '[bsCardBlur]',
  providers: [BsCardBlurHelper]
})
export class BsCardBlur {

  @HostBinding('class.card-blur') isEnabled:boolean = false;

  private _bodyBgSize:BgMetrics;

  constructor(private _bsConfig:BsThemeConfigProvider, private _bsCardBlurHelper:BsCardBlurHelper, private _el:ElementRef) {
    if (this._isEnabled()) {
      this._bsCardBlurHelper.init();
      this._getBodyImageSizesOnBgLoad();
      this._recalculateCardStylesOnBgLoad();

      this.isEnabled = true;
    }
  }

  @HostListener('window:resize')
  _onWindowResize():void {
    if (this._isEnabled()) {
      this._bodyBgSize = this._bsCardBlurHelper.getBodyBgImageSizes();
      this._recalculateCardStyle();
    }
  }

  private _getBodyImageSizesOnBgLoad():void {
    this._bsCardBlurHelper.bodyBgLoad().subscribe(() => {
      this._bodyBgSize = this._bsCardBlurHelper.getBodyBgImageSizes();
    });
  }

  private _recalculateCardStylesOnBgLoad():void {
    this._bsCardBlurHelper.bodyBgLoad().subscribe((event) => {
      setTimeout(this._recalculateCardStyle.bind(this));
    })
  }

  private _recalculateCardStyle():void {
    if (!this._bodyBgSize) {
      return;
    }
    this._el.nativeElement.style.backgroundSize = Math.round(this._bodyBgSize.width) + 'px ' + Math.round(this._bodyBgSize.height) + 'px';
    this._el.nativeElement.style.backgroundPosition = Math.floor(this._bodyBgSize.positionX) + 'px ' + Math.floor(this._bodyBgSize.positionY) + 'px';
  }

  private _isEnabled() {
    return this._bsConfig.get().theme.name == 'blur';
  }
}
