import { Component, ViewEncapsulation, OnInit} from '@angular/core';

@Component({
    selector: 'services-and-clinical-speciality',
    encapsulation: ViewEncapsulation.None,
    template: require('./servicesandclinicalspeciality.html'),
    styles: [require('./servicesandclinicalspeciality.scss')]
})
export class Servicesandclinicalspeciality implements OnInit{

    constructor() {        
    }
    ngOnInit() {
        this.dynamicMultiSelectTagInt(this.majorServiceList);
    }
    public data={
        "servicesProvided": 
        [
            {                   
                "servicesProvidedIdentifier": 1,
                "servicesProvidedName": "IPD",
                "services": 
                [
                    {
                        "servicesIdentifier": 1,
                        "servicesName": "Single specialty"
                    },
                    {
                        "servicesIdentifier": 2,
                        "servicesName": "Multi speciality"
                    },
                    {
                        "servicesIdentifier": 3,
                        "servicesName": "Secondary care"
                    },
                    {
                        "servicesIdentifier": 4,
                        "servicesName": "Tertiary care"
                    }
                ]
            },
            {
                "servicesProvidedIdentifier": 2,
                "servicesProvidedName": "OPD",
                "services": 
                [
                    {
                        "servicesIdentifier": 1,
                        "servicesName": "Consultation"
                    },
                    {
                        "servicesIdentifier": 2,
                        "servicesName": "Investigations"
                    },
                    {
                        "servicesIdentifier": 3,
                        "servicesName": "Pharmacy"
                    },
                    {
                        "servicesIdentifier": 4,
                        "servicesName": "Homecare"
                    }
                ]
            }
        ],
        "knownClinicalSpeciality": 
        [
            {
                "clinicalSpecialityIdentifier": 1,
                "clinicalSpecialityName": "Specialty 1"
            },
            {
                "clinicalSpecialityIdentifier": 2,
                "clinicalSpecialityName": "Specialty 2"
            },
            {
                "clinicalSpecialityIdentifier": 3,
                "clinicalSpecialityName": "Specialty 3"
            }
        ],
        "knownEconomicalSpeciality": 
        [
            {
                "economicalSpecialityIdentifier": 1,
                "economicalSpecialityName": "Specialty 1"
            },
            {
                "economicalSpecialityIdentifier": 2,
                "economicalSpecialityName": "Specialty 2"
            },
            {
                "economicalSpecialityIdentifier": 3,
                "economicalSpecialityName": "Specialty 3"
            }
        ],
        "specialtiesAvailable": 
        [
            {
                "codeIdentifier": 1,
                "codeDescription": "anesthesia"
            },
            {
                "codeIdentifier": 2,
                "codeDescription": "generalmedicine"
            }
        ],
        "facilitiesDetails": [
            {
                "codeIdentifier": 1,
                "codeDescription": "healthchecksup"
            },
            {
                "codeIdentifier": 2,
                "codeDescription": "bloodbank"
            }
        ]
    };
    public selectedMajorServiceId=[];
    public selectedClinicalSpecialityId=[];
    public selectedEconomicalSpecialityId=[];
    public selectedSpecialtiesAvailableId=[];
    public selectedFacilitiesDetailsId=[];
    
    public selectedMajorService=[];
    public selectedClinicalSpeciality=[];
    public selectedEconomicalSpeciality=[];
    public selectedSpecialtiesAvailable=[];
    public selectedFacilitiesDetails=[];

    public selectedMajorServiceObj=[];

    public majorServiceList=[
                    {id:1, name:'IPD'},
                    {id:2, name:'OPD'},
                    {id:3, name:'Day Care'},
                    {id:4, name:'Health Check Up'}
                ];
    public clinicalSpecialityList=[
                    {id:1, name:'IPD'},
                    {id:2, name:'OPD'},
                    {id:3, name:'Day Care'},
                    {id:4, name:'Health Check Up'}
                ];
    public economicalSpecialityList=[
                    {id:1, name:'IPD'},
                    {id:2, name:'OPD'},
                    {id:3, name:'Day Care'},
                    {id:4, name:'Health Check Up'}
                ];
    public specialtiesAvailableList=[
                    {id:1, name:'IPD'},
                    {id:2, name:'OPD'},
                    {id:3, name:'Day Care'},
                    {id:4, name:'Health Check Up'}
                ];
    public facilitiesDetailsList=[
                    {id:1, name:'IPD'},
                    {id:2, name:'OPD'},
                    {id:3, name:'Day Care'},
                    {id:4, name:'Health Check Up'}
    ];
    public selectedMajorServiceObjOptions={
        'IPD':{
            'List':[
                    {id:1, name:'IPD'},
                    {id:2, name:'OPD'},
                    {id:3, name:'Day Care'},
                    {id:4, name:'Health Check Up'}
            ]
        },
        'OPD':{
            'List':[
                    {id:1, name:'IPD'},
                    {id:2, name:'OPD'},
                    {id:3, name:'Day Care'},
                    {id:4, name:'Health Check Up'}
            ]
        },
        'DayCare':{
            'List':[
                {id:1, name:'IPD'},
                {id:2, name:'OPD'},
                {id:3, name:'Day Care'},
                {id:4, name:'Health Check Up'}
            ]
        },
        'HealthCheckUp':{
            'List':[
                {id:1, name:'IPD'},
                {id:2, name:'OPD'},
                {id:3, name:'Day Care'},
                {id:4, name:'Health Check Up'}
            ]
        }
    };
    public checkboxGroups=[
        {
            title:'Major Services Available*',
            items:[
                'IPD',
                'OPD',
                'Day Care',
                'Health Check Up'
            ]
        }
    ];
    dynamicMultiSelectTagInt(multiSelectOption:any[]){
        let outer=this;
        multiSelectOption.forEach(function(item, index, arr){
            let wrapSpaces=item.name.replace(/ /g,'');
            outer[wrapSpaces]={};
            outer[wrapSpaces]['List']=outer.selectedMajorServiceObjOptions[wrapSpaces]['List'];
            outer[wrapSpaces]['selected']=[];
            outer[wrapSpaces]['selectedId']=[];
        });
    }
    private multiselectChange(event, genericName){
        this['selected'+this.capitalizeFirstLetter(genericName)]=this._skipId(event,this[genericName+'List']);
        /*special case handel for dynamic multiselect and tag generation*/
        if(genericName=='majorService'){
            this['selected'+this.capitalizeFirstLetter(genericName)+'Obj'] =this.createDynamicObj(event, genericName);
        }
    }
    private multiselectChangeObject(event, genericName, index, childIndex){
        let multiSelectOption=this['selected'+this.capitalizeFirstLetter(genericName)+'Obj'][index][0][childIndex];
        let wrapSpaces=multiSelectOption.name.replace(/ /g,'');
        this[wrapSpaces]['selectedId']= multiSelectOption['selectedId'];
        this[wrapSpaces]['selected']= this._skipId(event,multiSelectOption['List']);
        this['selected'+this.capitalizeFirstLetter(genericName)+'Obj'][index][0][childIndex]['selected']= this[wrapSpaces]['selected'];
    }
    private removeTagObject(event, genericName, index, childIndex){
        let multiSelectOption=this['selected'+this.capitalizeFirstLetter(genericName)+'Obj'][index][0][childIndex];
        let wrapSpaces=multiSelectOption.name.replace(/ /g,'');
        let selectedId=this['selected'+this.capitalizeFirstLetter(genericName)+'Obj'][index][0][childIndex]['selectedId'];
        let arrayOfId=this._skipName(event,multiSelectOption['List']);
        this[wrapSpaces]['selected'] = multiSelectOption['selected'];
        this[wrapSpaces]['selectedId'] = selectedId.filter(x => arrayOfId.indexOf(x) < 0 );
        this['selected'+this.capitalizeFirstLetter(genericName)+'Obj'][index][0][childIndex]['selectedId'] =this[wrapSpaces]['selectedId'];
    }
    private createDynamicObj(event, genericName){
        let tempObj=[];
        let tempObj1=[];
        let tempObj2={};
        let _isReadyFlag=false;
        let outer=this;
        this['selected'+this.capitalizeFirstLetter(genericName)].filter(function(item, index, arr){
            if(index%2==1){
                _isReadyFlag=true;
            }else{
                _isReadyFlag=false;
            }
            if(index == (arr.length-1)){
                _isReadyFlag=true;
            }
            let wrapSpaces=item.replace(/ /g,'');
            tempObj2['set'+(index%2)]={};
            tempObj2['set'+(index%2)]['name']=item;
            tempObj2['set'+(index%2)]['List']=outer[wrapSpaces]['List'];
            tempObj2['set'+(index%2)]['selectedId']=outer[wrapSpaces]['selectedId'];
            tempObj2['set'+(index%2)]['selected']=outer[wrapSpaces]['selected'];
            if(_isReadyFlag){
                tempObj1.push(tempObj2);
                tempObj.push(tempObj1);
                tempObj1=[];
                tempObj2={};
                _isReadyFlag=false;
            }
        });
        return tempObj;
    }
    private removeTag(event, genericName){
        let arrayOfId=this._skipName(event,this[genericName+'List']);
        this['selected'+this.capitalizeFirstLetter(genericName)+'Id'] = this['selected'+this.capitalizeFirstLetter(genericName)+'Id'].filter(x => arrayOfId.indexOf(x) < 0 );
        if(genericName=='majorService'){
            let IdObj=this['selected'+this.capitalizeFirstLetter(genericName)+'Id'];
            this['selected'+this.capitalizeFirstLetter(genericName)+'Obj'] =this.createDynamicObj(IdObj, genericName);
        }        
    }
    private _skipName(event:any, multiSelectOption:any[]):any{// get the id from 
        let tempObj=[];
        multiSelectOption.filter(function(item, index, arr){
            if(event.indexOf(item.name)!=-1){
                tempObj.push(item.id);
            }
        });
        return tempObj;
    }
    private _skipId(event:any, multiSelectOption:any[]):any[] {// get the set of names from []of ids
        let tempObj=[];
        multiSelectOption.filter(function(item, index, arr){
            if(event.indexOf(item.id)!=-1){
                tempObj.push(item.name);
            }
        });
        return tempObj;
    }
    private capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
public geo=[
    {
        "regionName": "1",
        "regionId": "South",
        "states": [
            {
                "stateId": "1",
                "stateName": "Tamilnadu",
                "districts": [
                    {
                        "districtId": "1",
                        "distrcitName": "Kanchipuram",
                        "cities": [
                            {
                                "cityId": "1",
                                "cityName": "Chengalpattu",
                                "pinCodes": [
                                    "603001",
                                    "603002"
                                ]
                            },
                            {
                                "cityId": "2",
                                "cityName": "Sriperumbudhur",
                                "pinCodes": [
                                    "602105"
                                ]
                            }
                        ]
                    },
                    {
                        "districtId": "2",
                        "distrcitName": "Thiruvallur",
                        "cities": [
                            {
                                "cityId": "1",
                                "cityName": "Tiruthani",
                                "pinCodes": [
                                    "631209"
                                ]
                            },
                            {
                                "cityId": "2",
                                "cityName": "Poonamallee",
                                "pinCodes": [
                                    "600056"
                                ]
                            }
                        ]
                    },
                    {
                        "districtId": "3",
                        "distrcitName": "Villupuram",
                        "cities": [
                            {
                                "cityId": "1",
                                "cityName": "Thindivanam",
                                "pinCodes": [
                                    "604001"
                                ]
                            },
                            {
                                "cityId": "2",
                                "cityName": "Ulundurpet",
                                "pinCodes": [
                                    "606107"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "stateId": "2",
                "stateName": "Kerala"
            },
            {
                "stateId": "3",
                "stateName": "Andhra"
            }
        ]
    },
    {
        "regionName": "2",
        "regionId": "North",
        "states": [
            {
                "stateId": "1",
                "stateName": "Punjab"
            },
            {
                "stateId": "2",
                "stateName": "Uttar Pradesh"
            }
        ]
    }
];
}


