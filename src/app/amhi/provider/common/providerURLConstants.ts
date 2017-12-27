import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';

@Injectable()
export class ProviderURLConstants {
    public root_path: string;
    public Mnemonic: any
    public SCREEN_NANME = {
        MSG_01: '/REGISTRATION',
        MSG_02: '/EMPANELMENT',
        MSG_03: '/NETWORK',
        MSG_04: '/INFORMATION_UPDATE',
        MSG_05: '/STATUS_CHANGE',
        MSG_06: 'PROVIDER_QUERY'
    }
    constructor() {
        this.root_path = 'http://10.24.142.53:8080/CAREBusinessServices/providers/';
        this.Mnemonic = {
            Global:
            {
                PRV_GBL_STATE: this.root_path + 'references/states',//GET
                PRV_SEARCH: this.root_path + 'providers/search',//GET
                PRV_GBL_UPLOAD_VIEW: this.root_path + 'documents/'//POST  
            },
            Home:
            {
                PRV_STS_CAT: this.root_path + 'references/additionalgeography', //GET
                PRV_ENTITY: this.root_path + 'references/entitytype'   //POST  
            },
            Registration:
            {
                PRV_REG_INF_EDIT: this.root_path + 'information/', //GET
                PRV_REG_REQSRC: this.root_path + 'references/requestsource', //GET
                PRV_REG_ENTITY_TYPE: this.root_path + 'references/entitytype', //GET
                PRV_REG_SPECIALITY: this.root_path + 'references/specialty', //GET
                PRV_REG_ADM_OFF: this.root_path + 'references/adminoffice', //GET
                PRV_REG_MKR_EMP: this.root_path + 'references/actions/MAKER_EMPANELMENT', //GET
                PRV_REG_CHK_ACT: this.root_path + 'references/actions/CHECKER_REGISTER', //GET
                PRV_REG_STATUS: this.root_path + 'information/status', //PUT
                PRV_REG_INF: this.root_path + 'information', //PUT & POST
            }
        }
    }

    public GetMnemonicURL(param: string, value: any): string {
        switch (param) {
            case 'PRV_GLB_CITY':
                return this.root_path + 'references/' + value + '/cities'
            case 'PRV_REG_INF_RMKS':
                return this.root_path + 'information/' + value + '/remarks'
            case 'PRV_HOME_REJECT_RSN':
                return this.root_path + 'information/' + value + '/reason'
        }
    }

    public GetMnemonicSearchURL(param: string) {
        switch (param) {
            case 'PRV_SEARCH':
                return this.root_path + 'search'
            case 'PRV_ADV_SEARCH':
                return this.root_path + 'list'
        }
    }
}
