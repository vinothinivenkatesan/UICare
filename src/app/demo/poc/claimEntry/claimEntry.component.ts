import { Component, ViewEncapsulation, Output, ViewContainerRef } from '@angular/core';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { ClaimEntryService } from './claimEntry.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'claim-entry',
    encapsulation: ViewEncapsulation.None,
    template: require('./claimEntry.html'),
    styles: [require('./claimEntry.scss')]
})


export class ClaimEntry {

    public diagnosis: any;
    public scrutiny: string = "Status displayed here";
    public selectedDiagnosis: any;
    public coveragesAccordian: any = [];
    public diagnosisPanels: any = [];
    public selectedPanel: any;
    public activePanel: any;
    public selectedDiag: any;
    public output: any;
    public diagnosis_name: any;
    public age: any;
    public gender: any;
    public treatment: any;
    public procedure: any;
    public selecteddiagnosis: any = 1;
    public selectedage: any = 1;
    public selectedgender: any = 1;
    public selectedtreatment: any = 1;
    public selectedprocedure: any = 1;
    public lengthofstay: any;
    public claimamount: any;
    public comorbidities: IMultiSelectOption[];
    public signs: IMultiSelectOption[];
    public selectedSigns: any[];
    public drugs: IMultiSelectOption[];
    public symptoms: IMultiSelectOption[];
    public selectedSymptoms: any[];
    public investigations: IMultiSelectOption[];
    public selectedInvestigations: any[];
    public status: any = "Status displayed here";
    public selectedAge: any;

    public activeAcordian: any;

    private setActiveAccordian(val) {//identify the active accordian(open state) and set the active value
        this.activeAcordian = '';
        if (val.nextState) {//check if open
            this.activeAcordian = val.panelId;// set active accordian id
        }
    }

    public diagnosisList: any = [
        { id: 1, name: 'Typhoid', code: 'AH001', signs: [], symptoms: [], investigations: [], comorbidities: [] },
        { id: 2, name: 'Chronic kidney disease', code: 'AH002', signs: [], symptoms: [], investigations: [], comorbidities: [] },
        { id: 3, name: 'Pregnancy', code: 'AH003', signs: [], symptoms: [], investigations: [], comorbidities: [] }
    ];

    private mySettings: IMultiSelectSettings = {
        enableSearch: true,
        dynamicTitleMaxItems: 4
    };


    constructor(private claimentryService: ClaimEntryService, public toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);
    }

    loadData(id) {
        this.activeAcordian = id;
        this.claimentryService.getClaimEntry()
            .subscribe(
            results => {
                console.log(results);
                for (var i = 0; i < results.length; i++) {
                    this.diagnosis = results;
                    if (this.diagnosis[i].id == id) {
                        console.log(this.diagnosis[i].signs)
                        this.signs = this.diagnosis[i].signs;
                        this.symptoms = this.diagnosis[i].symptoms;
                        this.investigations = this.diagnosis[i].investigations;
                        this.comorbidities = this.diagnosis[i].comorbidities;
                        this.age = this.diagnosis[i].age;
                        if (this.age != []) {
                            this.selectedAge = this.age[0];
                        }
                        this.gender = this.diagnosis[i].gender;
                        this.diagnosis_name = this.diagnosis[i].diagnosis;
                        this.treatment = this.diagnosis[i].treatment;
                        this.procedure = this.diagnosis[i].procedure;
                        this.drugs = this.diagnosis[i].drugs;
                        this.lengthofstay = this.diagnosis[i].lengthofstay;
                        this.claimamount = this.diagnosis[i].claimamount;
                    }
                }
            },
            err => {
                console.log(err);
            });
    }

    onChange(data, diagnos) {
        console.log(data);
        console.log("diag" + this.diagnosis);
        console.log("panel" + this.diagnosisPanels);
        data[diagnos + 'Obj'] = [];
        for (var i = 0; i < this.diagnosis.length; i++) {
            if (this.diagnosis[i].id == data.id) {
                for (var j = 0; j < this.diagnosis[i][diagnos].length; j++) {
                    if (data[diagnos].indexOf(this.diagnosis[i][diagnos][j].id) != -1) {
                        data[diagnos + 'Obj'].push(this.diagnosis[i][diagnos][j]);
                    }
                }
            }
        }
    }

    convertjson(data, selecteddata, field) {
        data[field + 'Obj'] = [];
        data[field + 'Obj'].push(selecteddata);
    }

    postData() {
        if (this.selectedgender == 1) {
            this.toastr.error('Please select gender', 'Error');
        } else {
            this.output = this.diagnosisPanels;
            console.log(this.output);
            this.claimentryService.postClaim(this.output)
                .subscribe(
                results => {
                    this.toastr.success('Successfully saved!', 'Success!', { toastLife: 5000 });
                    this.status = results.status;
                    console.log(results);
                }, err => {
                    this.toastr.error('Something went wrong!', 'Oops!');
                    console.log(err);
                });
        }
    }

    showstatus() {
        this.scrutiny = this.status;
    }

    private onSelectDiagnosis(event) {
        this.selectedDiag = [];
        this.selectedDiag = this._skipIdd(event);
    }

    private _skipIdd(event: any): any[] {// get the set of names from []of ids
        let menu = [];
        event.forEach((item) => {
            menu.push({ 'name': this.diagnosisList[(item - 1)].name, 'code': this.diagnosisList[(item - 1)].code, 'id': this.diagnosisList[(item - 1)].id });
        });
        console.log(menu);
        return menu;
    }

    public addDiagnosis() {
        this.selectedPanel = 0;
        this.activePanel = this.selectedPanel;
        console.log(this.selectedDiagnosis.length);
        this.diagnosisPanels = this.selectedDiag;
        console.log(this.diagnosisPanels);
    }




}
