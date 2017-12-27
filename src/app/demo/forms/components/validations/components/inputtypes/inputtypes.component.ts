import { Component, ViewEncapsulation, OnInit } from '@angular/core';


@Component({
    selector: 'input-types',
    encapsulation: ViewEncapsulation.None,
    styles: [],
    template: require('./inputtypes.html'),
})
export class Inputtypes implements OnInit{

    constructor() {        
    }
    ngOnInit() {
        this.dynamicMultiSelectTagInt(this.majorServiceList);
    }
/*
** Dropdown
*/
    public defaultSelect:any ='';
    public dropdownSelect:any ='';
    public entityTypeList=[
                {
                    "entityTypeId": 1,
                    "entityTypeName": "Hospital"
                }, {
                    "entityTypeId": 2,
                    "entityTypeName": "Doctor"
                }, {
                    "entityTypeId": 3,
                    "entityTypeName": "Diagnostic Centre"
                }, {
                    "entityTypeId": 4,
                    "entityTypeName": "Home Care"
                }, {
                    "entityTypeId": 5,
                    "entityTypeName": "Pharmacy"
                }, {
                    "entityTypeId": 6,
                    "entityTypeName": "Dental Clinic"
                }, {
                    "entityTypeId": 7,
                    "entityTypeName": "Ambulance Service"
                }
            ];

/*
** Toogel Button
*/
public network = [
            { value: 'Y', display: 'Yes' },
            { value: 'N', display: 'No' }
        ];
public BlacklistIndicator='';
public blacklistFlag=true;
public blacklistInputObj='';
public radioFlag=true;
public radioInputObj='';
setIndustryBlacklist(val){
    this.BlacklistIndicator=val;
}
setBlacklistModel(val){
        this.blacklistFlag=false;
        this.blacklistInputObj=val;
    }
setModel(val, refString){
        this[refString+'Flag']=false;
        this[refString+'InputObj']=val;
        return '';
    }


/*
** Multiselect TagInput
*/
    public selectedMajorServiceId=null;
    public selectedClinicalSpecialityId=null;
    public selectedEconomicalSpecialityId=null;
    public selectedSpecialtiesAvailableId=null;
    public selectedFacilitiesDetailsId=null;
    
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
            outer[wrapSpaces]['selectedId']=null;
            outer[wrapSpaces]['model'];
        });
    }
    private multiselectChange(event, genericName){
        this['selected'+this.capitalizeFirstLetter(genericName)]=this._skipId(event,this[genericName+'List']);
        if(this['selected'+this.capitalizeFirstLetter(genericName)+'Id'].length == 0){
            this['selected'+this.capitalizeFirstLetter(genericName)+'Id']=null;
        }
        /*special case handel for dynamic multiselect and tag generation*/
        if(genericName=='majorService'){
            this['selected'+this.capitalizeFirstLetter(genericName)+'Obj'] =this.createDynamicObj(event, genericName);
        }
    }
    private multiselectChangeObject(event, genericName, index, childIndex){
        if(this['selected'+this.capitalizeFirstLetter(genericName)+'Obj'][index][0][childIndex]['selectedId'].length==0){
            this['selected'+this.capitalizeFirstLetter(genericName)+'Obj'][index][0][childIndex]['selectedId']=null;
        }
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
        if(this[wrapSpaces]['selectedId'].length==0){
            this[wrapSpaces]['selectedId']=null;
        }
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
            tempObj2['set'+(index%2)]['model'];
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
        if(this['selected'+this.capitalizeFirstLetter(genericName)+'Id'].length == 0){
            this['selected'+this.capitalizeFirstLetter(genericName)+'Id']=null;
        }
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
    setDynamicModel(modelObj, referObj){
        console.log(modelObj);
        console.log(referObj);
    }
    
    onToggle($event){

    }

    public myDatePickerOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'yyyy-mm-dd',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        inline: false,
        disableUntil: { year: 2016, month: 8, day: 10 },
        selectionTxtFontSize: '16px'
    }
    onDateChanged($event){

    }

}