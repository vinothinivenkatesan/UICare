import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[emailPattern][formControlName],[emailPattern][formControl],[emailPattern][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailPattern), multi: true }
  ]
})
export class EmailPattern implements Validator{
    validate(c: AbstractControl): { [key: string]: any } {
        let v = c.value;
        if(!this.validateEmail(v)  && v!=''){
            return {emailPattern:true};
        }
        return null;
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
}