import { Component, ViewEncapsulation, Output, EventEmitter, ViewChild } from '@angular/core';
import { GtConfig, GenericTableComponent } from 'angular-generic-table';
import { Privileges } from './../../theme/services/privileges/privileges.service';
import { WebService } from './../../theme/services/webService/webService.service';
import { GlobalURLConstants } from './../global/globalURLConstants';

@Component({
    selector: 'dashboard',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./dashboard.scss')],
    template: require('./dashboard.html')
})
export class Dashboard {

    public configObject: GtConfig<any>;
    @Output() data = new EventEmitter();

    @ViewChild(GenericTableComponent)
    private myTable: GenericTableComponent<any, any>;
    public tbReady: boolean = false;
    private gttext: any = { loading: 'Loading data...', noData: 'No Record Found', noMatchingData: 'No Record Found' }
    public advSearchPanel: boolean = false;
    public All: boolean = true;
    public INACTIVE: boolean = false;
    public ACTIVE: boolean = false;
    public Product: boolean = false;
    public Provider: boolean = true;
    public Claims: boolean = false;
    closeResult: string;

    private taskCompleted: number;
    private myQueue: number;
    private missedTask: number;
    private myRole: number;


    constructor(private webService: WebService, private urlConstants: GlobalURLConstants, private _privilege: Privileges) {
        this.assignConfigObject();
        this.loadTableData();
    }

    private assignConfigObject() {
        let outer = this;
        this.configObject = {
            settings: [
                {
                    columnOrder: 0,
                    objectKey: "id",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 1,
                    objectKey: "providerCode",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 2,
                    objectKey: "providerName",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 3,
                    objectKey: "processName",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 4,
                    objectKey: "assignedDate",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 5,
                    objectKey: "dueDate",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 6,
                    objectKey: "assignedTo",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 7,
                    objectKey: "percentComplete",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 8,
                    objectKey: "priority",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 9,
                    objectKey: "state",
                    search: true,
                    sort: "enable",
                    visible: true
                }
            ],
            fields: [
                {
                    name: "#",
                    objectKey: "id"
                },
                {
                    name: "Provider Code",
                    objectKey: "providerCode",
                    render: function(row) {
                        return '<p class="hyperlink"><a href="#/amhi/provider/home/register">' + row.providerCode + '</a></p>'
                    },
                    click: function(row) {
                        /*Register Checker Action*/

                        if ((row.taskCode == "PROV_REG_REVIEW_REQUEST") || (row.taskCode == "PROV_REG_SUBMIT_NEW_REQ")) {
                            outer._privilege.currentProviderId = row.providerCode;//'DRCGL000053';
                            outer._privilege.setCurrentTaskId(row.taskId);
                            outer._privilege.setCurrentTask('prvRegChk');
                        }
                        else if ((row.taskCode == "PROV_REG_SENTBACK_REQUEST ") || (row.taskCode == "PROV_REG_SENTBACK_TASK")) {
                            outer._privilege.currentProviderId = row.providerCode;//'DRCGL000053';
                            outer._privilege.setCurrentTaskId(row.taskId);
                            outer._privilege.setCurrentTask('prvRegNew');
                        }
                        else if ((row.taskCode == "PROV_REG_EMPANEL_REQUEST") || (row.taskCode == "PROV_EMP_SUBMIT_REQ")) {
                            outer._privilege.currentProviderId = row.providerCode;//'DRCGL000053';
                            outer._privilege.setCurrentTaskId(row.taskId);
                            outer._privilege.setCurrentTask('prvRegView');
                        }
                    }
                },
                {
                    name: "Provider Name",
                    objectKey: "providerName"
                },
                {
                    name: "Task Name",
                    objectKey: "processName"
                },
                {
                    name: "Assigned Date",
                    objectKey: "assignedDate"
                },
                {
                    name: "Due Date",
                    objectKey: "dueDate"
                },
                {
                    name: "Assigned To",
                    objectKey: "assignedTo"
                },
                {
                    name: "Progress",
                    objectKey: "percentComplete",
                    render: function(row) { return '<div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:' + row.percentComplete + '%">' + row.percentComplete + '%</div></div>' },
                },
                {
                    name: "Priority",
                    objectKey: "priority"
                },
                {
                    name: "Status",
                    objectKey: "state",
                    render: function(row) { if (row.state == "ACTIVE") return '<span class="btn btn-success btn-xs">' + row.state + '</span>'; else if (row.state == "INACTIVE") return '<span class="btn btn-warning btn-xs">' + row.state + '</span>'; else return '<span class="btn btn-info btn-xs">' + row.state + '</span>'; }
                }
            ],
            data: []
        }
    }

    private loadTableData() {
        let username = this._privilege.getLoggedUser();
        this.webService.serviceCall('get', this.urlConstants.GetMnemonicWithParams('DASH_LIST', username))
            .subscribe(
            results => {
                this.taskCompleted = results.myCompleted;
                this.myQueue = results.myQueue;
                this.missedTask = results.myMissedSLA;
                this.myRole = results.myRole;
                let taskList = results.taskList;
                let dataArrary: Array<any> = [];
                for (let r: number = 0; r < taskList.length; r++) {
                    taskList[r].id = r + 1;
                    dataArrary.push(taskList[r]);
                }

                this.configObject.data = dataArrary;

                this.gttext = { loading: 'No Record Found', noData: 'No Record Found', noMatchingData: 'No Record Found' }
            }, //Bind to view
            err => {
                console.log(err);
                this.gttext = { loading: 'No Record Found', noData: 'No Record Found', noMatchingData: 'No Record Found' }
            });
    }





    setStorage() {
        localStorage.setItem('newRegister', '1');
    }

    public applySearch = function(value: string) {
        this.myTable.gtSearch(value);
        this.refreshTable();
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

    public refreshTable() {
        this.myTable.changeRowLength(3);
        this.myTable.redraw();
    }

    public filter(Table, colName: string, filterVal: any) {
        if (filterVal == 'ACTIVE') {
            Table.gtApplyFilter({
                'state': ['ACTIVE']
            })
            this.All = false;
            this.INACTIVE = false;
            this.ACTIVE = true;
        }
        else {
            if (filterVal == 'INACTIVE') {
                Table.gtApplyFilter({
                    'state': ['INACTIVE']
                })
                this.All = false;
                this.INACTIVE = true;
                this.ACTIVE = false;
            } else {
                Table.gtClearFilter();
                this.All = true;
                this.INACTIVE = false;
                this.ACTIVE = false;
            }
        }
    }

    changestatus(listType: string) {
        if (listType == "Provider") {
            this.Product = false;
            this.Provider = true;
            this.Claims = false;
        } else {
            if (listType == "Product") {
                this.Product = true;
                this.Provider = false;
                this.Claims = false;
            } else {
                this.Product = false;
                this.Provider = false;
                this.Claims = true;
            }
        }

    }

    public exportData() {
        this.myTable.exportCSV('MyExport.csv');
    }

    /*public emptyEmpty(arrayarg){//expected type arrayarg
      arrayarg=[];
    }*/
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
