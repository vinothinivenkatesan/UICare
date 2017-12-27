import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'reactive-form',
    styles: [require('./reactiveForm.scss')],
    template: require('./reactiveForm.html'),
})
export class ReactiveForm implements OnInit {
    form: FormGroup;
    constructor(private formBuilder: FormBuilder) { }
    ngOnInit() {
        this.form = this.formBuilder.group({
            firstname: new FormControl('Tim', [Validators.required, Validators.minLength(2)]),
            surname: new FormControl('Motto'),
            age: new FormControl('20'),
            address: this.formBuilder.group({
                street: new FormControl('england,UK'),
                zipCode: new FormControl({value:'123123',disabled:true})
            }),
            submit: new FormControl('submit')
        });
    }
    onSubmit({ valid }: { valid: boolean }) {
        console.log(this.form.value, valid);
    }
}