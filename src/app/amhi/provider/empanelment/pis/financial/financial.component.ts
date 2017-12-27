import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'financial',
    encapsulation: ViewEncapsulation.None,
    template: require('./financial.html'),
    styles: [require('./financial.scss')]
})
export class Financial implements OnInit {

    constructor() {

    }
    private paymentMode: any = "Cheque";
    private paymentModeName: any = "paymentMode";
    private paymentModeoptions: any[] = [{name:"Cheque", id:"Cheque"}, {name:"NEFT/RTGS", id:"NEFT/RTGS"}];
    private chequeAddress: any = "Administrative";
    private chequeAddressName: any = "chequeAddress";
    private chequeAddressoptions: any[] = [{name:"Administrative", id:"Administrative"}, {name:"Branch", id:"Branch"}];
    private defaultSelect: any = null;
    private bnfcryACType: any = this.defaultSelect;
    private financialState: any = this.defaultSelect;
    private financialCity: any = this.defaultSelect;
    private financialDistrict: any = this.defaultSelect;
    public selectedAcType: any = this.defaultSelect;//[];
    public selectedRegion: any = this.defaultSelect;//[];
    public selectedState: any = this.defaultSelect;//[];
    public selectedDistrict: any = this.defaultSelect;//[];
    public selectedCity: any = this.defaultSelect;//[];
    public selectedPincode: any = this.defaultSelect;//[];
    public dependentSelection = ['region', 'state', 'district', 'city', 'pincode'];
    public financialObj = {}
    public geographyList: any = [];
    public stateList: any = [];
    public districtList: any = [];
    public cityList: any = [];
    public pincodeList: any = [];
   
    public acTypeList = [
        { value: 'Savings', display: 'Savings' },
        { value: 'Current', display: 'Current' },
        { value: 'NRO', display: 'NRO' },
        { value: 'NRE', display: 'NRE' },
        { value: 'FCNR', display: 'FCNR' }
    ];



    public selectedPaymentMode: any = 'Cheque Details';
    setToogle(val) {
        console.log(val);
        this.selectedPaymentMode = val;
        //this.registerObj.industryBlacklistIndicator=val;
    }
    ngOnInit() {
        this.initializeData();
    }
    initializeData() {
        //localStorage.setItem('userRole',this.userRole);
        this.getGeography();
        /*if(localStorage.getItem('userRole')=='checker1'){
            this.getRegisteredData(41);
        }*/
        //this.sampleCheck();
    }
    onGeographyChange(Obj, toGetProperty, toSetProperty) {
        let addToResultObj = {};
        let i = this.dependentSelection.indexOf(toSetProperty);
        let index = (i == -1 && toSetProperty == 'last') ? (this.dependentSelection.length - 1) : (i - 1);
        //let index=((i+1)==this.dependentSelection.length)?i:(i-1);
        let resultSetProperty = this.dependentSelection[(index)];
        let propNameCheck = (resultSetProperty == 'pincode') ? 'Number' : 'Name';

        addToResultObj[resultSetProperty + 'Id'] = Obj[resultSetProperty + 'Id'];

        addToResultObj[resultSetProperty + '' + propNameCheck] = Obj[resultSetProperty + '' + propNameCheck];

        this.financialObj[resultSetProperty] = addToResultObj;

        //this[toSetProperty]=Obj[toGetProperty];Number
        if (i != -1) {
            for (i; i < this.dependentSelection.length; i++) {
                this['selected' + this.capitalizeFirstLetter(this.dependentSelection[i])] = '';
                this[this.dependentSelection[i] + 'List'] = [];
            }
            if (resultSetProperty != 'pincode') {
                this[this.dependentSelection[index + 1] + 'List'] = Obj[toGetProperty];
            }

        }
    }

    getGeography() {
        let outer = this;
        /*this.registerService.serviceCall('get', '/providers/references/geography')
                            .subscribe(
                                result => {
                                    outer.geographyList=result;
                                },
                                err => {
                                    console.log(err);
                                }
                            );*/
        this.geographyList = [
            {
                "regionId": 11,
                "regionName": "south",
                "states": [
                    {
                        "stateId": 3,
                        "stateName": "Kerala",
                        "districts": [
                            {
                                "districtId": 2,
                                "districtName": "Alappuzha",
                                "cities": [
                                    {
                                        "cityId": 1,
                                        "cityName": "Edathua",
                                        "pincodes": [
                                            {
                                                "pincodeId": 7,
                                                "pincodeNumber": "689573"
                                            },
                                            {
                                                "pincodeId": 8,
                                                "pincodeNumber": "689574"
                                            }
                                        ]
                                    },
                                    {
                                        "cityId": 2,
                                        "cityName": "Thiruvalla",
                                        "pincodes": [
                                            {
                                                "pincodeId": 7,
                                                "pincodeNumber": "689573"
                                            },
                                            {
                                                "pincodeId": 8,
                                                "pincodeNumber": "689574"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "districtId": 3,
                                "districtName": "Ernakulam",
                                "cities": [
                                    {
                                        "cityId": 1,
                                        "cityName": "Edathua",
                                        "pincodes": [
                                            {
                                                "pincodeId": 7,
                                                "pincodeNumber": "689573"
                                            },
                                            {
                                                "pincodeId": 8,
                                                "pincodeNumber": "689574"
                                            }
                                        ]
                                    },
                                    {
                                        "cityId": 2,
                                        "cityName": "Thiruvalla",
                                        "pincodes": [
                                            {
                                                "pincodeId": 7,
                                                "pincodeNumber": "689573"
                                            },
                                            {
                                                "pincodeId": 8,
                                                "pincodeNumber": "689574"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "stateId": 4,
                        "stateName": "Tamilnadu",
                        "districts": [
                            {
                                "districtId": 2,
                                "districtName": "Alappuzha",
                                "cities": [
                                    {
                                        "cityId": 1,
                                        "cityName": "Edathua",
                                        "pincodes": [
                                            {
                                                "pincodeId": 7,
                                                "pincodeNumber": "689573"
                                            },
                                            {
                                                "pincodeId": 8,
                                                "pincodeNumber": "689574"
                                            }
                                        ]
                                    },
                                    {
                                        "cityId": 2,
                                        "cityName": "Thiruvalla",
                                        "pincodes": [
                                            {
                                                "pincodeId": 7,
                                                "pincodeNumber": "689573"
                                            },
                                            {
                                                "pincodeId": 8,
                                                "pincodeNumber": "689574"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "districtId": 3,
                                "districtName": "Ernakulam",
                                "cities": [
                                    {
                                        "cityId": 1,
                                        "cityName": "Edathua",
                                        "pincodes": [
                                            {
                                                "pincodeId": 7,
                                                "pincodeNumber": "689573"
                                            },
                                            {
                                                "pincodeId": 8,
                                                "pincodeNumber": "689574"
                                            }
                                        ]
                                    },
                                    {
                                        "cityId": 2,
                                        "cityName": "Thiruvalla",
                                        "pincodes": [
                                            {
                                                "pincodeId": 7,
                                                "pincodeNumber": "689573"
                                            },
                                            {
                                                "pincodeId": 8,
                                                "pincodeNumber": "689574"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "regionId": 12,
                "regionName": "North",
                "states": [
                    {
                        "stateId": 3,
                        "stateName": "Kerala",
                        "districts": [
                            {
                                "districtId": 2,
                                "districtName": "Alappuzha",
                                "cities": [
                                    {
                                        "cityId": 1,
                                        "cityName": "Edathua",
                                        "pincodes": [
                                            {
                                                "pincodeId": 7,
                                                "pincodeNumber": "689573"
                                            },
                                            {
                                                "pincodeId": 8,
                                                "pincodeNumber": "689574"
                                            }
                                        ]
                                    },
                                    {
                                        "cityId": 2,
                                        "cityName": "Thiruvalla",
                                        "pincodes": [
                                            {
                                                "pincodeId": 7,
                                                "pincodeNumber": "689573"
                                            },
                                            {
                                                "pincodeId": 8,
                                                "pincodeNumber": "689574"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "districtId": 3,
                                "districtName": "Ernakulam",
                                "cities": [
                                    {
                                        "cityId": 1,
                                        "cityName": "Edathua",
                                        "pincodes": [
                                            {
                                                "pincodeId": 7,
                                                "pincodeNumber": "689573"
                                            },
                                            {
                                                "pincodeId": 8,
                                                "pincodeNumber": "689574"
                                            }
                                        ]
                                    },
                                    {
                                        "cityId": 2,
                                        "cityName": "Thiruvalla",
                                        "pincodes": [
                                            {
                                                "pincodeId": 7,
                                                "pincodeNumber": "689573"
                                            },
                                            {
                                                "pincodeId": 8,
                                                "pincodeNumber": "689574"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "stateId": 4,
                        "stateName": "Tamilnadu",
                        "districts": [
                            {
                                "districtId": 2,
                                "districtName": "Alappuzha",
                                "cities": [
                                    {
                                        "cityId": 1,
                                        "cityName": "Edathua",
                                        "pincodes": [
                                            {
                                                "pincodeId": 7,
                                                "pincodeNumber": "689573"
                                            },
                                            {
                                                "pincodeId": 8,
                                                "pincodeNumber": "689574"
                                            }
                                        ]
                                    },
                                    {
                                        "cityId": 2,
                                        "cityName": "Thiruvalla",
                                        "pincodes": [
                                            {
                                                "pincodeId": 7,
                                                "pincodeNumber": "689573"
                                            },
                                            {
                                                "pincodeId": 8,
                                                "pincodeNumber": "689574"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "districtId": 3,
                                "districtName": "Ernakulam",
                                "cities": [
                                    {
                                        "cityId": 1,
                                        "cityName": "Edathua",
                                        "pincodes": [
                                            {
                                                "pincodeId": 7,
                                                "pincodeNumber": "689573"
                                            },
                                            {
                                                "pincodeId": 8,
                                                "pincodeNumber": "689574"
                                            }
                                        ]
                                    },
                                    {
                                        "cityId": 2,
                                        "cityName": "Thiruvalla",
                                        "pincodes": [
                                            {
                                                "pincodeId": 7,
                                                "pincodeNumber": "689573"
                                            },
                                            {
                                                "pincodeId": 8,
                                                "pincodeNumber": "689574"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];
        console.log(this);
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

}