import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[inputAddon][formControlName],[inputAddon][formControl],[inputAddon][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => InputAddon), multi: true }
    //{ provide: NG_VALIDATORS, useClass: inputAddon, multi: true }
  ]
})
export class InputAddon implements Validator{
    validate(c: AbstractControl): { [key: string]: any } {
        let v = c.value;
        if(v!=''){
            return {inputAddon:true};
        }
        return null;
    }
}