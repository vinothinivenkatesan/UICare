import { Component, ViewEncapsulation, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { GtConfig, GenericTableComponent } from 'angular-generic-table';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { ReferenceDataService } from './referenceData.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'referenceData',
    encapsulation: ViewEncapsulation.None,
    template: require('./referenceData.html'),
    styles: [require('./referenceData.scss')]
})


export class ReferenceData {

    public configObject: GtConfig<any>;
    @Output() data = new EventEmitter();

    @ViewChild(GenericTableComponent)
    private myTable: GenericTableComponent<any, any>;
    public tbReady: boolean = false;
    public advSearchPanel: boolean = false;
    public diagnosis: any;
    public diagnosisId: any;
    public diagnosisCode: any;
    public isValid: boolean = true;
    public sericeErr: any;

    public signMust: IMultiSelectOption[];
    public selectedsignMust: any;
    public signMay: IMultiSelectOption[];
    public selectedsignMay: any;
    public signShould: IMultiSelectOption[];
    public selectedsignShould: any;

    public symptomMust: IMultiSelectOption[];
    public selectedsymptomMust: any;
    public symptomMay: IMultiSelectOption[];
    public selectedsymptomMay: any;
    public symptomShould: IMultiSelectOption[];
    public selectedsymptomShould: any;

    public investigationMust: IMultiSelectOption[];
    public selectedinvestigationMust: any;
    public investigationMay: IMultiSelectOption[];
    public selectedinvestigationMay: any;
    public investigationShould: IMultiSelectOption[];
    public selectedinvestigationShould: any;

    public comorbiditiesMust: any;
    public comorbiditiesMay: any;
    public comorbiditiesShould: any;
    public selectedcomorbiditiesMust: any;
    public selectedcomorbiditiesMay: any;
    public selectedcomorbiditiesShould: any;
    public ageMust: any;
    public ageMay: any;
    public ageShould: any;
    public selectedageMust: any;
    public selectedageMay: any;
    public selectedageShould: any;
    public genderMust: any;
    public genderMay: any;
    public genderShould: any;
    public selectedgenderMust: any;
    public selectedgenderMay: any;
    public selectedgenderShould: any;
    public drugMust: any;
    public drugMay: any;
    public drugShould: any;
    public selecteddrugMust: any;
    public selecteddrugMay: any;
    public selecteddrugShould: any;
    public lengthofstay: any;
    public claimamount: any;
    public treatment: any;
    public procedure: any;
    public diagnosis_name: any;
    public claim_amount: any;
    public selectedprocedure: any = 1;
    public selectedtreatment: any;
    public selecteddiagnosis: any = 1;

    public los: any;
    public IO: any = {};
    public output = [{
        "id": '', "name": '', "code": '',
        "sign": {},
        "symptom": {},
        "investigation": {},
        "comorbidities": {},
        "gender": {},
        "age": {},
        "drug": {},
        "treatment": {}
    }];

    private mySettings: IMultiSelectSettings = {
        enableSearch: true,
        dynamicTitleMaxItems: 10
    };

    public diagnosisName: any;
    public result: any;
        constructor(private referenceDataService: ReferenceDataService, public toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);
        this.configObject = {
            settings: [
                {
                    columnOrder: 0,
                    objectKey: "Id",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 1,
                    objectKey: "DiagnosisCode",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 2,
                    objectKey: "DiagnosisName",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 3,
                    objectKey: "View",
                    search: true,
                    sort: "enable",
                    visible: true
                }
            ],
            fields: [
                {
                    name: "Id",
                    objectKey: "Id"
                },
                {
                    name: "Diagnosis Code",
                    objectKey: "DiagnosisCode",
                },
                {
                    name: "Diagnosis Name",
                    objectKey: "DiagnosisName"
                },
                {
                    name: "View",
                    objectKey: "View",
                    render: function(row) { return '<button class="btn btn-sm btn-primary"> Select </button>' },
                    click: (row) => { jQuery('html,body').animate({ scrollTop: jQuery("#diag_heading").offset().top }, 'slow'); return this.loadDiagnosis(row.Id,row.DiagnosisName); }
                }
            ],
            data: [
                {
                    Id: "1",
                    DiagnosisCode: "AH001",
                    DiagnosisName: "Typhoid",
                    View: "view"
                },
                {
                    Id: "2",
                    DiagnosisCode: "AH002",
                    DiagnosisName: "Chronic kidney disease",
                    View: "view"
                },
                {
                    Id: "3",
                    DiagnosisCode: "AH003",
                    DiagnosisName: "Pregnancy",
                    View: "view"
                }
            ]
        }
    }
          
    
    loadDiagnosis(Id,name) {
        this.resetValues();
        this.referenceDataService.getDiagnosis(Id)
            .subscribe(
            results => {
                this.diagnosis = results;
                if (this.diagnosis) {
                    this.isValid = false;
                    this.diagnosisName = name;
                    this.diagnosisId = this.diagnosis.id;
                    this.diagnosisCode = this.diagnosis.code;
                    this.signMust = this.diagnosis.sign.must;
                    this.signMay = this.diagnosis.sign.may;
                    this.signShould = this.diagnosis.sign.should;
                    this.symptomMust = this.diagnosis.symptoms.must;
                    this.symptomMay = this.diagnosis.symptoms.may;
                    this.symptomShould = this.diagnosis.symptoms.should;
                    this.investigationMust = this.diagnosis.investigations.must;
                    this.investigationMay = this.diagnosis.investigations.may;
                    this.investigationShould = this.diagnosis.investigations.should;
                    this.comorbiditiesMust = this.diagnosis.comorbidities.must;
                    this.comorbiditiesMay = this.diagnosis.comorbidities.may;
                    this.comorbiditiesShould = this.diagnosis.comorbidities.should;
                    this.ageMust = this.diagnosis.age.must;
                    this.ageMay = this.diagnosis.age.may;
                    this.ageShould = this.diagnosis.age.should;
                    this.genderMust = this.diagnosis.gender.must;
                    this.genderMay = this.diagnosis.gender.may;
                    this.genderShould = this.diagnosis.gender.should;
                    this.drugMust = this.diagnosis.drugs.must;
                    this.drugMay = this.diagnosis.drugs.may;
                    this.drugShould = this.diagnosis.drugs.should;
                    this.diagnosis_name = this.diagnosis.diagnosis;
                    this.procedure = this.diagnosis.procedure;
                    this.treatment = this.diagnosis.treatment;
                    this.lengthofstay = this.diagnosis.lengthofstay;
                    this.claimamount = this.diagnosis.claimamount;
                } else {
                    this.sericeErr = "Service Not Loaded";
                }
            },
            err => {
                console.log(err);
            });
    }

    public resetValues() {
        this.selectedsignMust = [];
        this.selectedsignMay = [];
        this.selectedsignShould = [];
        this.selectedsymptomMust = [];
        this.selectedsymptomMay = [];
        this.selectedsymptomShould = [];
        this.selectedinvestigationMust = [];
        this.selectedinvestigationMay = [];
        this.selectedinvestigationShould = [];
        this.selectedcomorbiditiesMust = [];
        this.selectedcomorbiditiesMay = [];
        this.selectedcomorbiditiesShould = [];
        this.selectedageMust = [];
        this.selectedageMay = [];
        this.selectedageShould = [];
        this.selectedgenderMust = [];
        this.selectedgenderMay = [];
        this.selectedgenderShould = [];
        this.selecteddrugMust = [];
        this.selecteddrugMay = [];
        this.selecteddrugShould = [];
        this.selectedtreatment = [];
    }

    onChange(selected, data, val, val2) {
        this.output[0][val][val2] = selected;
        this.output[0][val][val2 + 'Obj'] = [];
        for (let i = 0; i < selected.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (selected[i] == data[j].id) {
                    this.output[0][val][val2 + 'Obj'].push(data[j]);
                }
            }
        }

    }

    ontreatmentChange(selected, data, val) {
        this.output[0][val + 'Obj'] = [];
        for (let i = 0; i < selected.length; i++) {
            if (selected[i] == data[i].id) {
                this.output[0][val + 'Obj'].push(data[i]);
            }
        }
    }

    convertjson(data, selecteddata, field) {
        this.output[0][field + 'Obj'] = [];
        this.output[0][field + "Obj"].push(selecteddata);
    }

    postData() {
        this.output[0]["lengthofstay"] = this.los;
        this.output[0]["claimamount"] = this.claim_amount;
        this.output[0]["id"] = this.diagnosisId;
        this.output[0]["name"] = this.diagnosisName;
        this.output[0]["code"] = this.diagnosisCode;
        this.referenceDataService.postDiagnosis(this.output)
            .subscribe(
            results => {
                console.log(results);
                this.toastr.success('Successfully saved!', 'Success!', { toastLife: 5000 });
            }, err => {
                console.log(err);
                this.toastr.error('Something went wrong!', 'Oops!');
            });
    }


    public applySearch = function(value: string) {
        this.myTable.gtSearch(value);
        this.refreshTable();
    };

    public applyAdvanceSearch = function(table, confObj: GtConfig<any>, arg1: any, arg2: any, arg3: any) {
        for (let i = 1; i < confObj.settings.length; i++) {
            confObj.settings[i].search = false;
        }
        let arg1array: Array<any> = [];
        let arg2array: Array<any> = [];
        let arg3array: Array<any> = [];
        let length: number = 1;
        confObj.fields[0].search = function(row) {
            length += 1;
            console.log(row);
            console.log("arg1 " + arg1 + "arg2 " + arg2 + "arg3 " + arg3);

            if (arg1 != '') {
                if (row.MyDeadline.indexOf(arg1) == -1) {
                } else {
                    arg1array.push(row.MyDeadline);
                }
            }
            if (arg2 != '') {
                if (row.Status.indexOf(arg2) == -1) {
                } else {
                    arg2array.push(row.Status);
                }
            }
            if (arg3 != '') {
                if (row.Progress.indexOf(arg3) == -1) {
                } else {
                    arg3array.push(row.Progress);
                }
            }

            if (length == confObj.data.length) {
                if (arg1array.length > 0 || arg2array.length > 0 || arg3array.length > 0) {
                    //table.gtSearch(arg3).gtSearch(arg2);
                    //this.refreshTable();
                    table.gtApplyFilter({
                        MyDeadline: arg3array,
                        Status: arg2array,
                        Progress: arg3array
                    })
                }
            }
        };
        table.gtSearch(arg3);
        /*if(arg1!=''){
               table.gtSearch(arg1);
          //this.refreshTable();
        }
        if(arg2!=''){
          table.gtSearch(arg2);
          //this.refreshTable();
        }*/
        if (arg1array.length > 0 || arg2array.length > 0 || arg3array.length > 0) {
            //table.gtSearch(arg3).gtSearch(arg2);
            //this.refreshTable();
            table.gtApplyFilter({
                MyDeadline: arg3array,
                Status: arg2array,
                Progress: arg3array
            })
        }
        for (let i = 1; i < confObj.settings.length; i++) {
            confObj.settings[i].search = true;
        }
    };


    public headerSetting(tbHeaderObj) {
        let headSet: any = [];
        for (let h: number = 0; h < tbHeaderObj.length; h++) {
            let headDataset: any = {};
            headDataset.objectKey = tbHeaderObj[h].replace(' ', '');//h+1;//headers[h];
            headDataset.sort = 'enable';
            headDataset.search = true;
            headDataset.visible = true;
            headDataset.columnOrder = h;
            headSet.push(headDataset);
        }
        console.log(headSet);
        return headSet;
    }

    public headerField(tbHeaderObj) {
        let fieldSet: any = [];
        for (let f: number = 0; f < tbHeaderObj.length; f++) {
            let fieldDataset: any = {};
            fieldDataset.objectKey = tbHeaderObj[f].replace(' ', '');//f+1;//headers[f];
            fieldDataset.name = tbHeaderObj[f];
            fieldSet.push(fieldDataset);
            if (tbHeaderObj[f] == 'Task Name') {
                fieldDataset.classNames = 'sort-string setColor';
            }
            if (tbHeaderObj[f] == 'Progress') {
                fieldDataset.classNames = 'sort-string setColor';
            }
            if (tbHeaderObj[f] == 'Status') {
                //fieldDataset.classNames='sort-string setColor';          
                //fieldDataset.render=function(row){ return row.Status;};
                fieldDataset.value = function(row) { return row.Status; };
                //fieldDataset.search=function(row){ return row.Status;};
                fieldDataset.render = function(row) {
                    let bgColor: string = 'green';
                    if (row.Status == 'Saved') {
                        bgColor = 'blue';
                    } console.log(row);
                    if (row.Status == 'Priority' && row.MyDeadline != 'Done') {
                        bgColor = '#F0A16C';
                    }
                    if (row.Status == 'Delayed') {
                        bgColor = 'yellow';
                    }
                    return '<div style="background-color: ' + bgColor + ';" class="tbStatus">' + row.Status + '</div>';
                };
            }
        }
        console.log(fieldSet);
        return fieldSet;
    }
    public refreshTable() {
        this.myTable.changeRowLength(10);
        this.myTable.redraw();
    }


    public arrayPush(toAdd, toPush) {
        for (let r: number = 0; r < toPush.length; r++) {
            toAdd.push(toPush[r]);
        }
    }

    public tableProp(setting, field, data, newTbstruct?: boolean) {
        //this.configObject=tbData;
        if (setting) {
            if (newTbstruct) {
                this.configObject.settings = [];
                //this.emptyEmpty(this.configObject.settings);
            }
            this.arrayPush(this.configObject.settings, setting);
        }
        if (field) {
            if (newTbstruct) {
                this.configObject.fields = [];
                //this.emptyEmpty(this.configObject.fields);
            }
            this.arrayPush(this.configObject.fields, field);
        }
        if (data) {
            if (newTbstruct) {
                this.configObject.data = [];
                //this.emptyEmpty(this.configObject.data);
            }
            this.arrayPush(this.configObject.data, data);
        }
    }

}
