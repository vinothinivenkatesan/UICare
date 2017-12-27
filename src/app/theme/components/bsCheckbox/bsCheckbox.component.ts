import {Component, Input, Self} from '@angular/core';
import {ControlValueAccessor, NgModel} from '@angular/forms';

@Component({
  selector: 'bs-checkbox[ngModel]',
  styles: [require('./bsCheckbox.scss')],
  template: require('./bsCheckbox.html')
})
export class BsCheckbox implements ControlValueAccessor {
  @Input() disabled:boolean;
  @Input() label:string;
  @Input() value:string;
  @Input() bsCheckboxClass:string;

  public model: NgModel;
  public state: boolean;

  public constructor(@Self() state:NgModel) {
    this.model = state;
    state.valueAccessor = this;
  }

  public onChange(value: any): void {}
  public onTouch(value: any): void {}
  public writeValue(state: any): void {
    this.state = state;
  }

  public registerOnChange(fn: any): void {
    this.onChange = function(state: boolean) {
      this.writeValue(state);
      this.model.viewToModelUpdate(state);
    }
  }
  public registerOnTouched(fn: any): void { this.onTouch = fn; }
}
