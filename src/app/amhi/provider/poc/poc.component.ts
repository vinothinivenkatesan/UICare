import { Component, ViewEncapsulation, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { GtConfig, GenericTableComponent } from 'angular-generic-table';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

@Component({
    selector: 'poc',
    encapsulation: ViewEncapsulation.None,
    template: require('./poc.html'),
    styles: [require('./poc.scss')]
})


export class Poc {

    public configObject: GtConfig<any>;
    @Output() data = new EventEmitter();

    @ViewChild(GenericTableComponent)
    private myTable: GenericTableComponent<any, any>;
    public tbReady: boolean = false;
    public advSearchPanel: boolean = false;
    public diagnosis: any;

    public signMust: IMultiSelectOption[];
    public selectedsignMust: number[];
    public signMay: IMultiSelectOption[];
    public selectedsignMay: number[];
    public signShould: IMultiSelectOption[];
    public selectedsignShould: number[];

    public symptomMust: IMultiSelectOption[];
    public selectedsymptomMust: number[];
    public symptomMay: IMultiSelectOption[];
    public selectedsymptomMay: number[];
    public symptomShould: IMultiSelectOption[];
    public selectedsymptomShould: number[];

    public investigationMust: IMultiSelectOption[];
    public selectedinvestigationMust: number[];
    public investigationMay: IMultiSelectOption[];
    public selectedinvestigationMay: number[];
    public investigationShould: IMultiSelectOption[];
    public selectedinvestigationShould: number[];

    private mySettings: IMultiSelectSettings = {
        enableSearch: true,
        dynamicTitleMaxItems: 10
    };

    public heading: any;

    constructor() {
        this.configObject = {
            settings: [
                {
                    columnOrder: 0,
                    objectKey: "#",
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
                    name: "#",
                    objectKey: "#"
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
                    click: (row) => { return this.heading = row.DiagnosisName }
                }
            ],
            data: [
                {
                    '#': "1",
                    DiagnosisCode: "AH001",
                    DiagnosisName: "ACL tear",
                    View: "view"
                },
                {
                    '#': "2",
                    DiagnosisCode: "AH002",
                    DiagnosisName: "Osteoarthritis",
                    View: "view"
                },
                {
                    '#': "3",
                    DiagnosisCode: "AH003",
                    DiagnosisName: "Chronic kidney disease",
                    View: "view"
                },
                {
                    '#': "4",
                    DiagnosisCode: "AH004",
                    DiagnosisName: "Maternity",
                    View: "view"
                },
                {
                    '#': "5",
                    DiagnosisCode: "AH005",
                    DiagnosisName: "Cataract",
                    View: "view"
                },
                {
                    '#': "6",
                    DiagnosisCode: "AH006",
                    DiagnosisName: "Cholelithiasis",
                    View: "view"
                },
                {
                    '#': "7",
                    DiagnosisCode: "AH007",
                    DiagnosisName: "Appendicitis",
                    View: "view"
                },
                {
                    '#': "8",
                    DiagnosisCode: "AH008",
                    DiagnosisName: "Dengue",
                    View: "view"
                },
                {
                    '#': "9",
                    DiagnosisCode: "AH009",
                    DiagnosisName: "Inguinal hernia",
                    View: "view"
                },
                {
                    '#': "10",
                    DiagnosisCode: "AH010",
                    DiagnosisName: "Fibroid uterus",
                    View: "view"
                }
            ]
        }


        //

        this.diagnosis = {
            "signs": [
                {
                    "must": [
                        {
                            id: "1",
                            name: "cough"
                        }, {
                            id: "2",
                            name: "vomit"
                        }
                    ]
                },
                {
                    "may": [
                        {
                            id: "1",
                            name: "cough"
                        }, {
                            id: "2",
                            name: "vomit"
                        }
                    ]
                },
                {
                    "should": [
                        {
                            id: "1",
                            name: "cough"
                        }, {
                            id: "2",
                            name: "vomit"
                        }
                    ]
                }
            ],
            "symptoms": [
                {
                    "must": [
                        {
                            id: "1",
                            name: "tiredness"
                        },
                        {
                            id: "2",
                            name: "drowsiness"
                        }
                    ]
                }, {
                    "may": [
                        {
                            id: "1",
                            name: "tiredness"
                        },
                        {
                            id: "2",
                            name: "drowsiness"
                        }
                    ]
                }, {
                    "should": [
                        {
                            id: "1",
                            name: "tiredness"
                        },
                        {
                            id: "2",
                            name: "drowsiness"
                        }
                    ]
                }
            ],
            "investigations": [
                {
                    "must": [
                        {
                            id: "1",
                            name: "visual activity"

                        },
                        {
                            id: "2",
                            name: "platelet count"

                        }]
                }, {
                    "may": [
                        {
                            id: "1",
                            name: "visual activity"

                        },
                        {
                            id: "2",
                            name: "platelet count"

                        }
                    ]
                }, {
                    "should": [
                        {
                            id: "1",
                            name: "visual activity"

                        },
                        {
                            id: "2",
                            name: "platelet count"

                        }
                    ]
                }
            ]
        }

        this.signMust = this.diagnosis.signs[0].must;
        this.signMay = this.diagnosis.signs[1].may;
        this.signShould = this.diagnosis.signs[2].should;

        this.symptomMust = this.diagnosis.symptoms[0].must;
        this.symptomMay = this.diagnosis.symptoms[1].may;
        this.symptomShould = this.diagnosis.symptoms[2].should;

        this.investigationMust = this.diagnosis.investigations[0].must;
        this.investigationMay = this.diagnosis.investigations[1].may;
        this.investigationShould = this.diagnosis.investigations[2].should;

    }

   
    onChange(selectedOptions) {
        console.log(this.diagnosis.investigations[0].must);
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
        //for()
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
