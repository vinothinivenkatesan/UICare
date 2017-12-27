import { Component, ViewEncapsulation } from '@angular/core';
import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

@Component({
    selector: 'infra-pis-hospital',
    encapsulation: ViewEncapsulation.None,
    template: require('./infrapishospital.html'),
    styles: [require('./infrapishospital.scss')]
})
export class Infrapishospital {
    public myCoverageList: IMultiSelectOption[] = [
        { id: 1, name: 'Exclusion 1 / Testarea' },
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
    public ENT: IMultiSelectOption[] = [
        { id: 1, name: 'ENT1' },
        { id: 2, name: 'ENT2' },
        { id: 3, name: 'ENT3' },
        { id: 4, name: 'ENT4' }
    ];
    public Scopes: IMultiSelectOption[] = [
        { id: 1, name: 'Scopes1' },
        { id: 2, name: 'Scopes2' },
        { id: 3, name: 'Scopes3' },
        { id: 4, name: 'Scopes4' }
    ];
    public Kitchen: IMultiSelectOption[] = [
        { id: 1, name: 'Kitchen1' },
        { id: 2, name: 'Kitchen2' },
        { id: 3, name: 'Kitchen3' },
        { id: 4, name: 'Kitchen4' }
    ];
    public Ophthalmology: IMultiSelectOption[] = [
        { id: 1, name: 'Ophthalmology1' },
        { id: 2, name: 'Ophthalmology2' },
        { id: 3, name: 'Ophthalmology3' },
        { id: 4, name: 'Ophthalmology4' }
    ];
    public checkedList: any = [{ value: '', shortName: 'display', name: 'Display Me' }];
    public audit = [{ shortName: 'audits', name: 'Clinical audits' }, { shortName: 'cme', name: 'CME' }, { shortName: 'staff', name: 'Staff training' }];
    public teaching = [{ shortName: 'nursing', name: 'Nursing courses' }, { shortName: 'clinicalDoctor', name: 'Clinical courses for doctors' }, { shortName: 'nonclinicalDoctor', name: 'Non-Clinical courses for doctors' }, { shortName: 'clinicalResearch', name: 'Clinical research' }];
    public val = ['my details', 'custom tag', 'validate'];
    public selectedEquipment = [];

    public ambulanceFacility: any = "Available";
    public ambulanceFacilityName: any = "ambulanceFacility";
    public ambulanceFacilityoptions: any[] = [{name:"Available", id:"Available"}, {name:"Not Available", id:"Not Available"}];
    
    public ambulanceOwner: any = "Owned";
    public ambulanceOwnerName: any = "ambulanceOwner";
    public ambulanceOwneroptions: any[] = [{name:"Owned", id:"Owned"}, {name:"Out Sourced", id:"Out Sourced"}];
    
    public backupFacility: any = "Available";
    public backupFacilityName: any = "backupFacility";
    public backupFacilityoptions: any[] = [{name:"Available", id:"Available"}, {name:"Not Available", id:"Not Available"}];
    
    public backupType: any = "Generator";
    public backupTypeName: any = "backupType";
    public backupTypeoptions: any[] = [{name:"Generator",id:"Generator"}, {name:"UPS",id:"UPS"}];
    
  
    constructor() {

    }
    onChange(selected) {
        console.log(selected);
    }
    setToogle(val) {
        console.log(val);
        //this.registerObj.industryBlacklistIndicator=val;
    }
    private multiselectChange(selected_Options: any[], tagModel: string, multiSelectOptionObj: any[]) {//Used to set selected state in dropdown option
        this[tagModel] = [];
        this[tagModel] = this._skipId(selected_Options, multiSelectOptionObj);
    }
    private removeTag(removeTagName: string, multiSelectOptionId: any[], multiSelectOptionObj: any[]) {//used to remove selected options value in object which is used in setting dropdown select state
        let idValue = this._skipName(removeTagName, multiSelectOptionObj);
        multiSelectOptionId.splice(multiSelectOptionId.indexOf(idValue), 1);
    }
    private _skipName(event: any, multiSelectOption: any[]): any {// get the id from name
        for (let i = 0; i < multiSelectOption.length; i++) {
            if (multiSelectOption[i].name == event) {
                return multiSelectOption[i].id;
            }
        }
        return '';
    }
    private _skipId(event: any, multiSelectOption: any[]): any[] {// get the set of names from []of ids
        let menu = [];
        event.forEach((item) => {
            menu.push(multiSelectOption[(item - 1)].name);
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