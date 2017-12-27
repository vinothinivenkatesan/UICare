import {Component} from '@angular/core';

import {BsMsgCenterService} from './bsMsgCenter.service';

@Component({
  selector: 'bs-msg-center',
  providers: [BsMsgCenterService],
  styles: [require('./bsMsgCenter.scss')],
  template: require('./bsMsgCenter.html')
})
export class BsMsgCenter {

  public notifications:Array<Object>;
  public messages:Array<Object>;

  constructor(private _bsMsgCenterService:BsMsgCenterService) {
    this.notifications = this._bsMsgCenterService.getNotifications();
    this.messages = this._bsMsgCenterService.getMessages();
  }

}
