import { Component, ViewEncapsulation, Output, EventEmitter, ViewChild } from '@angular/core';
import { GtConfig } from 'angular-generic-table';
import { GenericTableComponent } from 'angular-generic-table';//generic tabel lib


@Component({
    selector: 'home',
    encapsulation: ViewEncapsulation.None,
    template: require('./home.html'),
    styles: [require('./home.scss')]
})
export class Home {

    /*constructor() {
      #
      Request Id
      Task Name
      Provider Name
      Provider ID Code
      Start Date
      Days to Deadline
      My Deadline
      Progress
      Closure Date
      Status
    }*/

    public configObject: GtConfig<any>;
    @Output() data = new EventEmitter();

    @ViewChild(GenericTableComponent)
    private myTable: GenericTableComponent<any, any>;
    public tbReady: boolean = false;
    public advSearchPanel: boolean = false;

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
                    objectKey: "RequestId",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 2,
                    objectKey: "TaskName",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 3,
                    objectKey: "ProviderName",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 4,
                    objectKey: "ProviderIDCode",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 5,
                    objectKey: "StartDate",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 6,
                    objectKey: "DaystoDeadline",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 7,
                    objectKey: "MyDeadline",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 8,
                    objectKey: "Progress",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 9,
                    objectKey: "ClosureDate",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 10,
                    objectKey: "Status",
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
                    name: "Request ID",
                    objectKey: "RequestId"
                },
                {
                    name: "Task Name",
                    objectKey: "TaskName"
                },
                {
                    name: "Provider Name",
                    objectKey: "ProviderName"
                },
                {
                    name: "Provider ID Code",
                    objectKey: "ProviderIDCode"
                },
                {
                    name: "Start Date",
                    objectKey: "StartDate"
                },
                {
                    name: "Days to Deadline",
                    objectKey: "DaystoDeadline"
                },
                {
                    name: "My Deadline",
                    objectKey: "MyDeadline"
                },
                {
                    name: "Progress",
                    objectKey: "Progress"
                },
                {
                    name: "Closure Date",
                    objectKey: "ClosureDate"
                },
                {
                    name: "Status",
                    objectKey: "Status"
                },
            ],
            data: [

                {
                    '#': "1",
                    ClosureDate: "12/8/2015",
                    DaystoDeadline: "6 Days",
                    MyDeadline: "2 days over",
                    Progress: "80",
                    ProviderIDCode: "12345",
                    ProviderName: "Apollo Hospital",
                    RequestId: "1234560",
                    StartDate: "12-8-2016",
                    Status: "Delayed",
                    TaskName: "Empanelment Request"
                },
                {
                    '#': "2",
                    ClosureDate: "1/8/2016",
                    DaystoDeadline: "8 Days",
                    MyDeadline: "0 days",
                    Progress: "30",
                    ProviderIDCode: "12346",
                    ProviderName: "Max Hospital",
                    RequestId: "1234561",
                    StartDate: "2/8/2016",
                    Status: "Priority",
                    TaskName: "Change Request"
                },
                {
                    '#': "3",
                    ClosureDate: "12-8-2016",
                    DaystoDeadline: "12 Days",
                    MyDeadline: "2 days",
                    Progress: "60",
                    ProviderIDCode: "12347",
                    ProviderName: "Mendata",
                    RequestId: "1234562",
                    StartDate: "12/8/2016",
                    Status: "Priority",
                    TaskName: "Registration Request"
                },
                {
                    '#': "4",
                    ClosureDate: "-",
                    DaystoDeadline: "-",
                    MyDeadline: "-",
                    Progress: "-",
                    ProviderIDCode: "Retail",
                    ProviderName: "Apollo Hospital",
                    RequestId: "1234563",
                    StartDate: "Maker",
                    Status: "Saved",
                    TaskName: "Empanelment Request",
                },
                {
                    '#': "5",
                    ClosureDate: "12/8/2016",
                    DaystoDeadline: "10 Days over",
                    MyDeadline: "Done",
                    Progress: "80",
                    ProviderIDCode: "12348",
                    ProviderName: "Vasan Eye Care",
                    RequestId: "1234564",
                    StartDate: "12/8/2016",
                    Status: "Delayed",
                    TaskName: "Blacklisting",
                },
                {
                    '#': "6",
                    ClosureDate: "12/8/2016",
                    DaystoDeadline: "10 Days",
                    MyDeadline: "Done",
                    Progress: "80",
                    ProviderIDCode: "12349",
                    ProviderName: "Swamy Clinic",
                    RequestId: "1234565",
                    StartDate: "12/8/2016",
                    Status: "Priority",
                    TaskName: "Registration Request"
                },
                {
                    '#': "7",
                    ClosureDate: "12/8/2016",
                    DaystoDeadline: "12 Days",
                    MyDeadline: "Done",
                    Progress: "80",
                    ProviderIDCode: "12350",
                    ProviderName: "Agarwals",
                    RequestId: "1234566",
                    StartDate: "12/8/2016",
                    Status: "Priority",
                    TaskName: "Depanelment"
                },
                {
                    '#': "8",
                    ClosureDate: "12/8/2016",
                    DaystoDeadline: "12 Days",
                    MyDeadline: "2 days",
                    Progress: "60",
                    ProviderIDCode: "12347",
                    ProviderName: "Mendata",
                    RequestId: "1234562",
                    StartDate: "12/8/2016",
                    Status: "Priority",
                    TaskName: "Registration Request"
                },
                {
                    '#': "9",
                    ClosureDate: "-",
                    DaystoDeadline: "-",
                    MyDeadline: "-",
                    Progress: "-",
                    ProviderIDCode: "Retail",
                    ProviderName: "Apollo Hospital",
                    RequestId: "1234563",
                    StartDate: "Maker",
                    Status: "Saved",
                    TaskName: "Empanelment Request",
                },
                {
                    '#': "10",
                    ClosureDate: "12/8/2016",
                    DaystoDeadline: "10 Days over",
                    MyDeadline: "Done",
                    Progress: "80",
                    ProviderIDCode: "12348",
                    ProviderName: "Vasan Eye Care",
                    RequestId: "1234564",
                    StartDate: "12/8/2016",
                    Status: "Delayed",
                    TaskName: "Blacklisting",
                },
                {
                    '#': "11",
                    ClosureDate: "12/8/2016",
                    DaystoDeadline: "10 Days",
                    MyDeadline: "Done",
                    Progress: "80",
                    ProviderIDCode: "12349",
                    ProviderName: "Swamy Clinic",
                    RequestId: "1234565",
                    StartDate: "12/8/2016",
                    Status: "Priority",
                    TaskName: "Registration Request"
                },
                {
                    '#': "12",
                    ClosureDate: "12/8/2016",
                    DaystoDeadline: "12 Days",
                    MyDeadline: "Done",
                    Progress: "80",
                    ProviderIDCode: "12350",
                    ProviderName: "Agarwals",
                    RequestId: "1234566",
                    StartDate: "12/8/2016",
                    Status: "Priority",
                    TaskName: "Depanelment"
                }


            ]
        }
    }

//    loadData() {
//
//        var lookup = {};
//        var items = json.DATA;
//        var result = [];
//
//        for (var item, i = 0; item = items[i++];) {
//            var name = item.name;
//
//            if (!(name in lookup)) {
//                lookup[name] = 1;
//                result.push(name);
//            }
//        }
//    }

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
            /*      
                  if(row.Progress=='80'){        
                  table.gtSearch(arg1);
                  //this.refreshTable();
                  table.gtSearch(arg2);
                  //this.refreshTable();
                  table.gtSearch(arg3);
                  //this.refreshTable();
                  table.gtSearch('80');
                  //this.refreshTable();
                   //return '80';
                  }else {
                   //return false;
                  }*/
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

    public readUploadFile(data: any) {
        let fileread = new FileReader();
        let outer: any = this;
        fileread.readAsText(data.target.files[0]);
        fileread.onload = function(e) {
            let res: any = e.currentTarget;
            let csvData: any = res.result || '';
            outer.csvParser(csvData);
        }
    }

    public csvParser(dataParse: any) {
        let csvData: any = dataParse.split(/\r\n|\n/);
        /*let headers: any = csvData[0].split(',');
        let rowData: any =[];
    
        for ( let i: number = 1; i < csvData.length; i++) {
              // split content based on comma
              let data = csvData[i].split(',');
              if (data.length == headers.length) {
                  let myRow: any =[];
                  for ( let j: number = 0; j < headers.length; j++) {
                      myRow[headers[j]]=data[j];
                  }
                  rowData.push(myRow);
              }
        }*/
        this.tableData(csvData);
    }

    public tableData(csvData) {
        let headers: any = csvData[0].split(',');
        let rowData: any = [];
        for (let i: number = 1; i < csvData.length; i++) {
            // split content based on comma
            let data = csvData[i].split(',');
            if (data.length == headers.length) {
                let myRow: any = [];
                for (let j: number = 0; j < headers.length; j++) {
                    myRow[headers[j].replace(' ', '')] = data[j];
                }
                rowData.push(myRow);
            }
        }
        this.tableProp(this.headerSetting(headers), this.headerField(headers), rowData, true);
        console.log(rowData);
        console.log(this.configObject);
        this.tbReady = true;
    }

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
        this.myTable.changeRowLength(3);
        this.myTable.redraw();
    }

    public filter(Table, colName: string, filterVal: any) {
        if (filterVal == 'Delayed') {
            Table.gtApplyFilter({
                'Status': ['Delayed']
            })
        }
        if (filterVal == 'Priority') {
            Table.gtApplyFilter({
                'Status': ['Priority']
            })
        }
        if (filterVal == 'Saved') {
            Table.gtApplyFilter({
                'Status': ['Saved']
            })
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

    public uploadf(data: any) {
        let fileread = new FileReader();
        let outer: any = this;
        fileread.onload = function(e) {
            let res: any = e.currentTarget;
            let csvData: any = res.result || '';
            let allTextLines: any = csvData.split(/\r\n|\n/);
            let headers: any = allTextLines[0].split(',');

            let tabelObj: any = {};
            let headSet: any = [];
            for (let h: number = 0; h < headers.length; h++) {
                let headDataset: any = {};
                headDataset.objectKey = "r" + (h + 1);//headers[h];
                headDataset.columnOrder = h;
                headSet.push(headDataset);
            }

            let fieldSet: any = [];

            for (let f: number = 0; f < headers.length; f++) {
                let fieldDataset: any = {};
                fieldDataset.objectKey = "r" + (f + 1);//headers[f];
                fieldDataset.name = headers[f];
                fieldSet.push(fieldDataset);
            }

            let rowData: any = [];

            for (let i: number = 1; i < allTextLines.length; i++) {
                // split content based on comma
                let data = allTextLines[i].split(',');
                if (data.length == headers.length) {
                    let myRow: any = {};
                    for (let j: number = 0; j < headers.length; j++) {
                        myRow["r" + (j + 1)] = data[j];
                    }
                    rowData.push(myRow);
                }
            }
            tabelObj.settings = headSet;
            tabelObj.fields = fieldSet;
            tabelObj.data = rowData;

            //outer.mygttable.innerHTML='<generic-table [gtSettings]="configObject.settings" [gtFields]="configObject.fields" [gtData]="configObject.data"></generic-table>';
            outer.configObject.settings = [];
            for (let r: number = 0; r < headSet.length; r++) {
                outer.configObject.settings.push(headSet[r]);
            }
            outer.configObject.fields = [];
            for (let r: number = 0; r < fieldSet.length; r++) {
                outer.configObject.fields.push(fieldSet[r]);
            }
            outer.configObject.data = [];
            for (let r: number = 0; r < rowData.length; r++) {
                outer.configObject.data.push(rowData[r]);
            }
            //outer.refreshTable();
            outer.tbReady = true;
            console.log(outer.configObject);
        }
        console.log(fileread.readAsText(data.target.files[0]));
    }

}
