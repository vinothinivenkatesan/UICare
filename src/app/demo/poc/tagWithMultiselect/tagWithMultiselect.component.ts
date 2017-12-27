import { Component, ViewEncapsulation} from '@angular/core';
import {IMultiSelectOption,IMultiSelectTexts,IMultiSelectSettings} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

@Component({
    selector: 'tagWithMultiselect',
    encapsulation: ViewEncapsulation.None,
    template: require('./tagWithMultiselect.html'),
    styles: [require('./tagWithMultiselect.scss')]
})
export class TagWithMultiselect {
public myCoverageList: IMultiSelectOption[] = [
        { id: 1, name: 'Testarea' },
        { id: 2, name: 'Exclusion 2' },
        { id: 3, name: 'Exclusion 3' },
        { id: 4, name: 'Exclusion 4' },
        { id: 5, name: 'Exclusion 5' },
        { id: 6, name: 'Exclusion 6' }
      ];
      public equipmentList: IMultiSelectOption[] = [
        { id: 1, name: 'ENT' },
        { id: 2, name: 'Kitchen' },
        { id: 3, name: 'Ophthalmology' },
        { id: 4, name: 'Scopes' }
      ];
      public checkedList:any=[];
      public audit=[{shortName:'audits',name:'Clinical audits'}, {shortName:'cme',name:'CME'}, {shortName:'staff',name:'Staff training'}];
      public teaching=[{shortName:'nursing',name:'Nursing courses'}, {shortName:'clinicalDoctor',name:'Clinical courses for doctors'}, {shortName:'nonclinicalDoctor',name:'Non-Clinical courses for doctors'}, {shortName:'clinicalResearch',name:'Clinical research'}];
      public val=[];
      public selectedCommittee=[];
      public equipmentOptions=[];
      public selectedEquipment=[];
      public selectList=[];
      public ENT=[];
      public Kitchen=[];
      public Ophthalmology=[];
      public Scopes=[];
      public ENTList=[
      { id: 1, name: 'Testarea' },
        { id: 2, name: 'Exclusion 2' },
        { id: 3, name: 'Exclusion 3' },
        { id: 4, name: 'Exclusion 4' },
        { id: 5, name: 'Exclusion 5' },
        { id: 6, name: 'Exclusion 6' }
      ];
      public KitchenList=[
      { id: 1, name: 'Testarea' },
        { id: 2, name: 'Exclusion 2' },
        { id: 3, name: 'Exclusion 3' },
        { id: 4, name: 'Exclusion 4' },
        { id: 5, name: 'Exclusion 5' },
        { id: 6, name: 'Exclusion 6' }
      ];public OphthalmologyList=[
      { id: 1, name: 'Testarea' },
        { id: 2, name: 'Exclusion 2' },
        { id: 3, name: 'Exclusion 3' },
        { id: 4, name: 'Exclusion 4' },
        { id: 5, name: 'Exclusion 5' },
        { id: 6, name: 'Exclusion 6' }
      ];
      public ScopesList=[
      { id: 1, name: 'Testarea' },
        { id: 2, name: 'Exclusion 2' },
        { id: 3, name: 'Exclusion 3' },
        { id: 4, name: 'Exclusion 4' },
        { id: 5, name: 'Exclusion 5' },
        { id: 6, name: 'Exclusion 6' }
      ];
      public ambulanceFacility = [
            { value: 'Y', display: 'Available' },
            { value: 'N', display: 'Not Available' }
        ]; 
      public ambulanceOwner = [
            { value: 'Y', display: 'Owned' },
            { value: 'N', display: 'Out Sourced' }
        ];
      public backupFacility = [
            { value: 'Y', display: 'Available' },
            { value: 'N', display: 'Not Available' }
        ]; 
      public backupType = [
            { value: 'Generator', display: 'Generator' },
            { value: 'UPS', display: 'UPS' }
        ];
    constructor() {
        
    }
    onChange(selected){
        this['val']=[];
        this['val']=this._skipId(selected,this.myCoverageList);
        this.checkedList=[];
        for(let i=0; i<this.val.length; i++){
            let obj:any={};
            obj.name=this.val[i];
            obj.value=this.val[i];
            obj.shortName='myIndex-'+i;
            this.checkedList.push(obj);
        }
        console.log(selected);
    }
    setToogle(val){
        
        console.log(val);
        //this.registerObj.industryBlacklistIndicator=val;
    }
    private multiselectChange(selected_Options:any[], tagModel:string, multiSelectOptionObj:any[], index?:any){//Used to set selected state in dropdown option
        debugger;
        this[tagModel]=[];
        this[tagModel]=this._skipId(selected_Options,multiSelectOptionObj);
        if(tagModel=='selectedEquipment'){
                this.selectList=[];
                for(let i=0; i<this[tagModel].length; i++){
                    let obj:any={};
                    obj.values=this[this[tagModel][i]+'List'];
                    obj.options=[];
                    obj.tagValue=[];
                    this.selectList.push(obj);
                }
        }else{
            this.selectList[index].tagValue=this[tagModel];
        }
    }
    private removeTag(removeTagName:string, multiSelectOptionId:any[], multiSelectOptionObj:any[]){//used to remove selected options value in object which is used in setting dropdown select state
        let idValue=this._skipName(removeTagName, multiSelectOptionObj);
        multiSelectOptionId.splice(multiSelectOptionId.indexOf(idValue),1);
    }
    private _skipName(event:any, multiSelectOption:any[]):any{// get the id from name
        for(let i=0; i<multiSelectOption.length; i++){
            if(multiSelectOption[i].name==event)
            {
            return multiSelectOption[i].id;
            }
        }
        return '';
    }
    private _skipId(event:any, multiSelectOption:any[]):any[] {// get the set of names from []of ids
        let menu = [];
        event.forEach((item) => {
            menu.push(multiSelectOption[(item-1)].name);
        });
        return menu;
    }
    /*
        (ngModelChange)="multiselect_option_change($event)"//multiselect
        private multiselect_option_change(selected_Options:[]){//Used to set selected state in dropdown option
            this.tag_input_Value=[];
            this.tag_input_Value=this._skipId(selected_Options);
        }

        (onRemove)="removeTag($event, multiselect_option_valueobj)"//TagInput
        private removeTag(remove_tag_name:string, multiselect_option_valueobj:[]){//used to remove selected options value in object which is used in setting dropdown select state
            let idValue=this._skipName(remove_tag_name);
            multiselect_option_valueobj.splice(multiselect_option_valueobj.indexOf(idValue),1);
        }
        private _skipName(event:any):any{// get the id from name
            for(let i=0; i<this.myCoverageList.length; i++){
                if(this.myCoverageList[i].name==event)
                {
                return this.myCoverageList[i].id;
                }
            }
            return '';
        }
        private _skipId(event:any):any[] {// get the set of names from []of ids
            let menu = [];
            event.forEach((item) => {
                menu.push(this.myCoverageList[(item-1)].name);
            });
            return menu;
        }
    */

}