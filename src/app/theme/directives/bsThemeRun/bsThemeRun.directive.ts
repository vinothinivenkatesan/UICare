import {Directive, HostBinding} from '@angular/core';

import {BsThemeConfigProvider, isMobile} from '../../../theme';

@Directive({
  selector: '[bsThemeRun]'
})
export class BsThemeRun {

  private _classes:Array<string> = [];
  @HostBinding('class') classesString:string;

  constructor(private _bsConfig:BsThemeConfigProvider) {
  }

  public ngOnInit():void {
    this._assignTheme();
    this._assignMobile();
  }

  private _assignTheme():void {
    this._addClass(this._bsConfig.get().theme.name);
  }

  private _assignMobile():void {
    if (isMobile()) {
      this._addClass('mobile');
    }
  }

  private _addClass(cls:string) {
    this._classes.push(cls);
    this.classesString = this._classes.join(' ');
  }
}
