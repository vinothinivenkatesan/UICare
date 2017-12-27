import { Component, ViewEncapsulation, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { Http, Response,URLSearchParams, RequestOptions } from '@angular/http';
import { GtConfig, GenericTableComponent, GtInformation } from 'angular-generic-table';
import { HomeService } from './home.service';
import { Privileges } from './../../../theme/services/privileges/privileges.service';
import { ProviderGlobalService } from './../global/providerGlobal.service';
import { WebService } from './../../../theme/services/webService/webService.service';
import { ProviderURLConstants } from '../common/providerURLConstants';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'home',
    encapsulation: ViewEncapsulation.None,
    template: require('./home.html'),
    styles: [require('./home.scss')]
})


export class Home implements OnInit {

    public configObject: GtConfig<any>;
    @Output() data = new EventEmitter();

    @ViewChild(GenericTableComponent)
    private myTable: GenericTableComponent<any, any>;
    public tbReady: boolean = false;
    public advSearchPanel: boolean = false;
    public All: boolean = true;
    public Registered: boolean = false;
    public Empaneled: boolean = false;
    public result: any;
    closeResult: string;
    private emptyString: string = '';
    private name: string = this.emptyString;
    private code: string = this.emptyString;
    private pincode: string = this.emptyString;
    private aka: string = this.emptyString;
    private irdacode: string = this.emptyString;
    private pannumber: string = this.emptyString;
    public rowCount: number = 10;
    public reasonList: any;
    private notifyModal: any;
    private stateList: any = [];
    private cityList: any = [];
    private providerCategoryList: any;
    private statusList: any;
    private entityTypeList: any;
    private searchValues: any;
    private searchResults: any;
    private selectedEntity: any = this.emptyString;
    private selectedCategory: any = this.emptyString;
    private selectedStatus: any = this.emptyString;
    private selectedState: any = this.emptyString;
    private selectedCity: any = this.emptyString;

    private pageCurrent: number = 1;
    private recordLength: number = this.rowCount;
    private searchText: string = '';

    private recordFrom: number;
    private recordTo: number;


    /*custom Modal*/
    public alertNotifyModal: any;
    private notifyHeader = 'Notification';
    private notifyBody = 'Notification content';
    private notifyType = 'alert';
    private notifyName = 'alert';
    private notifyBtn1 = 'Close';
    private gttext: any = { loading: 'Loading data...', noData: 'No Record Found', noMatchingData: 'No Record Found' }


    constructor(private _privilege: Privileges, private homeService: HomeService, private webService: WebService,
        private urlConstants: ProviderURLConstants, private providerGlobalService: ProviderGlobalService) {
        this.assignConfigObject();
        this.loadState();
        this.loadStatusandCategory();
        this.loadEntityType();
        this.loadTableData(this.pageCurrent, this.recordLength, this.searchText);
    }

    public trigger = function($event) {
        debugger;
        switch ($event.name) {
            case 'gt-page-changed-lazy':
                console.log($event.value.pageCurrent);
                console.log($event.value.recordLength);
                this.loadTableData($event.value.pageCurrent, $event.value.recordLength, this.searchText);
                break;
            case 'gt-sorting-applied':
                console.log($event.value);
                break;
            case 'gt-row-length-changed':
                this.loadTableData(this.pageCurrent, $event.value, this.searchText);
                break;
            default:
                console.log('defaultevent');
                console.log($event);
                break;
        }
    };

    private assignConfigObject() {
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
                    objectKey: "entityType",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 4,
                    objectKey: "city",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 5,
                    objectKey: "pincode",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 6,
                    objectKey: "irdaCode",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 7,
                    objectKey: "panNumber",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 8,
                    objectKey: "providerCategory",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 9,
                    objectKey: "status",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 10,
                    objectKey: "tag1",
                    search: true,
                    sort: "enable",
                    visible: true
                },
                {
                    columnOrder: 11,
                    objectKey: "tag2",
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
                        if (row.status == "Active" && row.providerCategory == "Registered") {
                            return '<p class="hyperlink"><a href="#/amhi/provider/register">' + row.providerCode + '</a></p>';
                        }
                        else {
                            return '<p class="hyperlink">' + row.providerCode + '</p>';
                        }
                    },
                    click: (row) => {
                        if (row.status == "NA" && row.providerCategory == "Registered") {
                            this._privilege.setCurrentTask('prvRegView');
                            this._privilege.setUserRole('Maker1');
                            localStorage.setItem('newRegister', '0');
                            // this.router.navigate(['amhi/provider/empanelment']);
                        }
                    }
                },
                {
                    name: "Name",
                    objectKey: "providerName"
                },
                {
                    name: "Entity Type",
                    objectKey: "entityType"
                },
                {
                    name: "City",
                    objectKey: "city"
                },
                {
                    name: "Pin Code",
                    objectKey: "pincode"
                },
                {
                    name: "IRDA Code",
                    objectKey: "irdaCode"
                },
                {
                    name: "Pan Number",
                    objectKey: "panNumber"
                },
                {
                    name: "Provider Category",
                    objectKey: "providerCategory"
                },
                {
                    name: "Empanelment Status",
                    objectKey: "status",
                    render: function(row) { if (row.status == "INACTIVE") return '<p class="hyperlink">' + row.status + '</p>'; else return row.status },
                    click: (row) => { if (row.status == "INACTIVE") this.getRejectionReason(row.providerCode); else return 0; }
                },
                {
                    name: "Primary Tag",
                    objectKey: "tag1"
                },
                {
                    name: "Secondary Tag",
                    objectKey: "tag2"
                }
            ],
            data: []
        }
    }

    private loadTableData(pageCurrent, recordLength, searchText) {
        let outer = this;
        let params: URLSearchParams = new URLSearchParams();
        params.set('searchText', searchText);
        params.set('pageNo', pageCurrent);
        params.set('rowCount', recordLength);
        this.webService.serviceCall('get', this.urlConstants.GetMnemonicSearchURL('PRV_SEARCH'), params)
            .subscribe(
            results => {
                let paging = {
                    "pageNext": pageCurrent + 1,
                    "pageCurrent": pageCurrent,
                    "pagePrevious": null,
                    "recordLength": recordLength,
                    "recordsAfterFilter": results.totalRecordCount,
                    "recordsAfterSearch": results.totalRecordCount,
                    "recordsAll": results.totalRecordCount,
                    "pageTotal": results.totalRecordCount,
                    "recordFrom": 1,
                    "recordTo": 10
                }
                outer.configObject.info = <GtInformation>paging;
                if (typeof (outer.configObject.info) == "object") {
                    outer.recordFrom = outer.configObject.info.recordFrom;
                    outer.recordTo = outer.configObject.info.recordTo;
                }
                let totalresult = results.providerSearchResult;
                let dataArrary: Array<any> = [];
                for (let r = 0; r < totalresult.length; r++) {
                    totalresult[r]['id'] = (r + 1) + ((outer.configObject.info.recordLength) * (outer.configObject.info.pageCurrent - 1));
                    dataArrary.push(totalresult[r]);
                }
                outer.gttext = { loading: '<i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i><span class="sr-only">Loading...</span>', noData: 'No Record Found', noMatchingData: 'No Record Found' }
                outer.configObject.data = dataArrary;

            }, //Bind to view
            err => {
                // Log errors if any
                outer.gttext = { loading: 'No Record Found', noData: 'No Record Found', noMatchingData: 'No Record Found' }
                console.log(err);
            });
    }

    private loadStatusandCategory() {
         this.webService.serviceCall('get', this.urlConstants.Mnemonic.Home.PRV_STS_CAT)
            .subscribe(
            results => {
                this.providerCategoryList = results.providerCategory;
                this.statusList = results.status;
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            });
    }
    private loadEntityType() {
        this.webService.serviceCall('get', this.urlConstants.Mnemonic.Home.PRV_ENTITY)
            .subscribe(
            results => {
                this.entityTypeList = results;
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            });
    }
    private loadState() {
        this.providerGlobalService.getState()
            .subscribe(
            results => {
                this.stateList = results;
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            });
    }
    private stateChanged(stateId) {
        this.resetCity();
        this.loadCity(stateId);

    }
    private loadCity(stateId) {
        if (stateId == '')
            return;
        this.providerGlobalService.getCity(stateId)
            .subscribe(
            results => {
                this.cityList = results;
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            });
    }
    private resetCity() {
        this.cityList = [];
        this.selectedCity = this.emptyString;
    }
    private assingNotifyModal(modal) {
        this.notifyModal = modal;
    }

    getAdvancedSearchResults(signupForm: NgForm) {
        let hasValue = false;
        this.searchValues = signupForm.value;
        console.log(this.searchValues);
        Object.keys(this.searchValues).forEach(function(item) { if (signupForm.value[item] != '') { hasValue = true; } });
        if (hasValue) {
            let outer = this;
            let params: URLSearchParams = new URLSearchParams();
            params.set('providerName', this.searchValues.name);
            params.set('alternateName', this.searchValues.aka);
            params.set('providerCode', this.searchValues.code);
            params.set('stateId', this.searchValues.state);
            params.set('cityId', this.searchValues.city);
            params.set('irdaCode', this.searchValues.irdacode);
            params.set('pincodeId', this.searchValues.pincode);
            params.set('entityTypeId', this.searchValues.entitytype);
            params.set('panNumber', this.searchValues.pannumber);
            params.set('providerCategoryId', this.searchValues.category);
            params.set('statusId', this.searchValues.status);
            params.set('pageNo', this.pageCurrent.toString());
            params.set('rowCount', this.recordLength.toString());
            this.webService.serviceCall('get', this.urlConstants.GetMnemonicSearchURL('PRV_ADV_SEARCH'), params)
                .subscribe(
                results => {
                    let paging = {
                        "pageNext": this.pageCurrent + 1,
                        "pageCurrent": this.pageCurrent,
                        "pagePrevious": null,
                        "recordLength": this.recordLength,
                        "recordsAfterFilter": results.totalRecordCount,
                        "recordsAfterSearch": results.totalRecordCount,
                        "recordsAll": results.totalRecordCount,
                        "pageTotal": results.totalRecordCount,
                        "recordFrom": 1,
                        "recordTo": 10
                    }
                    outer.configObject.info = <GtInformation>paging;
                    if (typeof (outer.configObject.info) == "object") {
                        outer.recordFrom = outer.configObject.info.recordFrom;
                        outer.recordTo = outer.configObject.info.recordTo;
                    }

                    let totalresult = results.providerSearchResult;
                    this.configObject.data = [];
                    let dataArrary: Array<any> = [];
                    for (let r: number = 0; r < totalresult.length; r++) {
                        totalresult[r]['id'] = (r + 1) + ((outer.configObject.info.recordLength) * (outer.configObject.info.pageCurrent - 1));
                        dataArrary.push(totalresult[r]);
                    }

                    outer.gttext = { loading: "<i class='fa fa-spinner'></i>", noData: 'No Record Found', noMatchingData: 'No Record Found' }
                    outer.configObject.data = dataArrary;
                }, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });
        } else {
            this.notifyBody = "Please enter atleast minimum search criteria for search";
            this.notifyName = "AlertMessage";
            this.notifyBtn1 = "Close";
            this.alertNotifyModal.open();
        }
    }

    getSearchResults(search) {
        console.log(search);
        this.loadTableData(this.pageCurrent, this.recordLength, search);
    }

    getRejectionReason(code) {
        console.log(code);
        this.webService.serviceCall('get', this.urlConstants.GetMnemonicURL('PRV_HOME_REJECT_RSN',code))
            .subscribe(
            results => {
                this.reasonList = results;
                this.notifyModal.open();
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            });
    }
    ngOnInit() {


    }



    setStorage() {
        this._privilege.setCurrentTask('prvRegNew');
        this._privilege.setCurrentTaskId('');
        this._privilege.currentProviderId = '';
        let userName = this._privilege.getLoggedUser();
        /*if(userName.indexOf('maker1')>-1){
            this._privilege.setCurrentTask('prvRegNew');
        }
        else if(userName.indexOf('maker2')>-1){
            this._privilege.currentProviderId='DRCGL000053';
            this._privilege.setCurrentTask('prvRegView');
        }else if(userName.indexOf('checker')>-1){
            this._privilege.currentProviderId='DRCGL000053';
            this._privilege.setCurrentTask('prvRegChk');
        }*/
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
        this.myTable.changeRowLength(this.rowCount);
        this.myTable.redraw();
    }

    public filter(Table, colName: string, filterVal: any) {
        if (filterVal == 'Empaneled') {
            Table.gtApplyFilter({
                'providerCategory': ['Empaneled']
            })
            this.All = false;
            this.Registered = false;
            this.Empaneled = true;
        }
        else {
            if (filterVal == 'Registered') {
                Table.gtApplyFilter({
                    'providerCategory': ['Registered']
                })
                this.All = false;
                this.Registered = true;
                this.Empaneled = false;
            } else {
                Table.gtClearFilter();
                this.All = true;
                this.Registered = false;
                this.Empaneled = false;
            }
        }
    }

    public exportData() {
        this.myTable.exportCSV('MyExport.csv');
    }

    public arrayPush(toAdd, toPush) {
        for (let r: number = 0; r < toPush.length; r++) {
            toAdd.push(toPush[r]);
        }
    }
    assingAlertNotifyModal(modal) {
        this.alertNotifyModal = modal;
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
