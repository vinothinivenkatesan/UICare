import { Injectable } from '@angular/core';

@Injectable()
export class SharedMethods {

  constructor() {

  }
  public convertJsonProperty(obj, idProp, nameProp) {
    let temp = JSON.stringify(obj);
    temp = temp.replace(idProp, 'id');
    temp = temp.replace(nameProp, 'name');
    return JSON.parse(temp);
  }

  public filterObject(actualObj, referalObject) {
    let tempRegKeyArray = Object.keys(actualObj);
    tempRegKeyArray.forEach(function (item, index, arr) {
      if (referalObject[item] != undefined) {
        actualObj[item] = referalObject[item];
      }
    });
    return actualObj;
  }

  // public setFocusToError(model?) {
  //   let scrollTopVal = jQuery('.page-top').height();
  //   if (model) {
  //     scrollTopVal = jQuery("#" + model).offset().top - scrollTopVal;
  //     jQuery('html,body').animate({ scrollTop: scrollTopVal }, 'slow');
  //   }
  //   else {
  //     scrollTopVal = jQuery(".has-error").first().find('.form-control').offset().top - scrollTopVal;
  //     jQuery('html,body').animate({ scrollTop: scrollTopVal }, 'slow');
  //     jQuery('.has-error').first().find('.form-control').focus();
  //   }
  // }

  public validateEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  public checkLength(value, minlength, maxlength?) {
    maxlength = maxlength == undefined ? minlength : maxlength;
    value = "" + value;
    return (value.length >= minlength && value.length <= maxlength);
  }

  public capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  public objectToArray(obj, propertyName) {
    let tempArray = [];
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].isDeleted == 'N') {
        tempArray.push(obj[i][propertyName]);
      }
    }
    return tempArray;
  }

  public checkIsDeleted(oldObj, newObj, toSetProperty, compareWith) {
    let tempObj = [];
    oldObj.filter(function (item, index, array) {
      if (newObj.find(function (newItem, newIndex, newArray) { return item[compareWith] == newItem[compareWith] })) {
        item['isDeleted'] = 'Y';
        tempObj.push(item);
      }
    });
    tempObj = oldObj
    return tempObj;
  }

   public skipName(event: any, multiSelectOption: any[]): any { // get the id from 
        let tempObj = [];
        multiSelectOption.filter(function(item, index, arr) {
            if (event.indexOf(item.name) != -1) {
                tempObj.push(item.id);
            }
        });
        return tempObj;
    }

    public skipId(event: any, multiSelectOption: any[]): any[] { // get the set of names from []of ids
        let tempObj = [];
        multiSelectOption.filter(function(item, index, arr) {
            if (event.indexOf(item.id) != -1) {
                tempObj.push(item.name);
            }
        });
        return tempObj;
    }
    public multiselectChangeCommon(objReferance, event, genericName) {
        objReferance['selected' + this.capitalizeFirstLetter(genericName)] = this.skipId(event, objReferance[genericName + 'List']);
        if (objReferance['selected' + this.capitalizeFirstLetter(genericName) + 'Id'].length == 0) {
            this['selected' + this.capitalizeFirstLetter(genericName) + 'Id'] = null;
        }
    }
    public removeTagCommon(objReferance, event, genericName) {
        let arrayOfId = this.skipName(event, objReferance[genericName + 'List']);
        objReferance['selected' + this.capitalizeFirstLetter(genericName) + 'Id'] = objReferance['selected' + this.capitalizeFirstLetter(genericName) + 'Id'].filter(x => arrayOfId.indexOf(x) < 0);
        if (objReferance['selected' + this.capitalizeFirstLetter(genericName) + 'Id'].length == 0) {
            objReferance['selected' + this.capitalizeFirstLetter(genericName) + 'Id'] = null;
        }
    }

}
