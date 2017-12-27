import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { contentHeaders } from '../auth/headers';
import { Http } from '@angular/http';
import { LocalstorageService } from './../../localstorage.service';
import { Privileges } from './../../theme/services/privileges/privileges.service';

@Component({
    selector: 'login',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./login.scss')],
    template: require('./login.html')
})
export class Login {

    public form: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;
    public submitted: boolean = false;

    constructor(fb: FormBuilder, private localstorageService: LocalstorageService, public router: Router, private _privilege: Privileges, public http: Http) {
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });

        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }
    public onSubmit(values: Object): void {
        this.localstorageService.setValue('id_token', 'testsession');
        this.localstorageService.setValue("user", this.email.value);
        //this.router.navigate(['amhi/provider/home']);
        this.router.navigate(['amhi/dashboard']);
        this._privilege.setLoggedUser(this.email.value);
        if (this.email.value.indexOf('maker') > -1) {
            this._privilege.setUserRole('Maker1');
        }
        else if (this.email.value.indexOf('checker') > -1) {
            this._privilege.setUserRole('Checker1');
        }
        //        let body = values;
        //        console.log(body);
        //        this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
        //            .subscribe(
        //            response => {
        //                console.log(response.json());
        //                this.localstorageService.setValue('id_token', response.json().id_token);
        //                this.localstorageService.setValue('userrole', response.json().role);
        //                this.router.navigate(['amhi/provider/home']);
        //            },
        //            error => {
        //                alert(error.text());
        //                console.log(error.text());
        //            }
        //            );
    }


}
