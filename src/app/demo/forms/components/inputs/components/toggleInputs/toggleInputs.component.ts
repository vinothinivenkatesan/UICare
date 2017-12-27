import { Component, Input } from '@angular/core';

@Component({
    selector: 'toggle-inputs',
    template: `<div class="btn-group" data-toggle="buttons">
  <label class="btn btn-primary" *ngFor="let obj of genders" ngClass="">
    <input type="radio" name="options" id="option1" autocomplete="off"> {{obj.display}}
  </label>
</div>`
})

export class ToggleInputs {

    @Input() buttonName: string;
    public genders = [
        { value: 'F', display: 'Female' },
        { value: 'M', display: 'Male' }
    ];

}

