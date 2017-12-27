import {Injectable} from '@angular/core';

@Injectable()
export class BsThemePreloader {

  private static _loaders:Array<Promise<any>> = [];

  public static registerLoader(method:Promise<any>):void {
    BsThemePreloader._loaders.push(method);
  }

  public static clear():void {
    BsThemePreloader._loaders = [];
  }

  public static load():Promise<any> {
    return new Promise((resolve, reject) => {
      BsThemePreloader._executeAll(resolve);
    });
  }

  private static _executeAll(done:Function):void {
    setTimeout(() => {
      Promise.all(BsThemePreloader._loaders).then((values) => {
        done.call(null, values);

      }).catch((error) => {
        console.error(error);
      });
    });
  }
}
