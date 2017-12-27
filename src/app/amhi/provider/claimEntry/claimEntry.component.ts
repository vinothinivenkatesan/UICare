import { Component, ViewEncapsulation, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';


@Component({
    selector: 'claim-entry',
    encapsulation: ViewEncapsulation.None,
    template: require('./claimEntry.html'),
    styles: [require('./claimEntry.scss')]
})


export class ClaimEntry {
    public selectedOptions: number[];//[]of number contains 'selected' options 'id list'
    public selectedCoverages: string[];//[]of string contains 'selected' options 'name list'
    public selectedVarient: any;//string assings the currently select (variant) name on singel-select dropdown
    public activeVarient: any;//string tells the active (open) accordian id;
    public diagnosis: any;

    public myCoverageList: IMultiSelectOption[] = [
        { id: 1, name: 'Exclusion 1 / Testarea' },
        { id: 2, name: 'Exclusion 2' },
        { id: 3, name: 'Exclusion 3' },
        { id: 4, name: 'Exclusion 4' },
        { id: 5, name: 'Exclusion 5' },
        { id: 6, name: 'Exclusion 6' }
    ];//multiple dropdown option object [{id:number, name:'any'},..]

    public selectedDiagnosis: any;
    public diagnosisList: IMultiSelectOption[] = [
        { id: 1, name: 'ACL tear' },
        { id: 2, name: 'Osteoarthritis' },
        { id: 3, name: 'Chronic kidney disease' },
        { id: 4, name: 'Maternity' },
        { id: 5, name: 'Cataract' },
        { id: 6, name: 'Cholelithiasis' },
        { id: 7, name: 'Appendicitis' },
        { id: 8, name: 'Dengue' },
        { id: 9, name: 'Inguinal hernia' },
        { id: 10, name: 'Fibroid uterus' }
    ];//multiple dropdown option object [{id:number, name:'any'},..]


    /*
    [] of object accordian,
    each object has 3 property 
    # "varient: accordian-titel(from singel-select dropdown)"
    # "coverages: []of string contains selected coverages for the varient, accordian-content-> tags (from multi-select dropdown)"
    # "options: []of number contains selected coverages for the varient, Used to assing back the selection to multi-select dropdown"
    */
    public coveragesAccordian: any = [];
    public diagnosisPanels: any = [];
    public selectedPanel: any;
    public activePanel: any;
    public selectedDiag:any;
    private mySettings: IMultiSelectSettings = {
        enableSearch: true,
        dynamicTitleMaxItems: 10
    };
    
    public signs: IMultiSelectOption[];
    public selectedSigns: number[];
    public symptoms: IMultiSelectOption[];
    public selectedSymptoms: number[];
    public investigations: IMultiSelectOption[];
    public selectedInvestigations: number[];


    constructor() {
        this.diagnosis = {
            "signs": [
                {
                    id: "1",
                    name: "cough"
                }, {
                    id: "2",
                    name: "vomit"
                },
                {
                    id: "1",
                    name: "cough"
                }, {
                    id: "2",
                    name: "vomit"
                }
            ],
            "symptoms": [

                {
                    id: "1",
                    name: "tiredness"
                },
                {
                    id: "2",
                    name: "drowsiness"
                },
                {
                    id: "1",
                    name: "tiredness"
                },
                {
                    id: "2",
                    name: "drowsiness"
                }
            ],
            "investigations": [
                {
                    id: "1",
                    name: "visual activity"

                },
                {
                    id: "2",
                    name: "platelet count"

                },
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
        
        this.signs= this.diagnosis.signs;
        this.symptoms= this.diagnosis.symptoms;
        this.investigations= this.diagnosis.investigations;
    }

    private onVarientChange(event) {//Get the dropdown values (coverages) for corresponding (varient) value
        this.selectedOptions = [];
        for (let i = 0; i < this.coveragesAccordian.length; i++) {
            if (this.coveragesAccordian[i].varient === this.selectedVarient) {
                this.selectedOptions = this.coveragesAccordian[i].options;
            }
        }
        this.onCoverageChange(this.selectedOptions)
    }
    private onCoverageChange(event) {//Used to set selected state in dropdown option
        this.selectedCoverages = [];
        this.selectedCoverages = this._skipId(event);
    }
    private removeTag(event, cover) {//used to remove selected options value in object which is used in setting dropdown select state
        let idValue = this._skipName(event);
        cover.options.splice(cover.options.indexOf(idValue), 1);
    }
    private clearSelection() {
        this.selectedVarient = '';
        this.selectedCoverages = [];
        this.selectedOptions = [];
    }
    private addCoverages() {// To add a new/update accordian object
        if (this.selectedVarient != '' && this.selectedCoverages != [] && this.selectedOptions != []) {
            let index
            let newVarient: boolean = true;//checks for new (to add)

            console.log(this.coveragesAccordian.length);

            for (let i = 0; i < this.coveragesAccordian.length; i++) {//check for update if exicts
                if (this.coveragesAccordian[i].varient === this.selectedVarient) {
                    this.coveragesAccordian[i].coverages = [];
                    this.coveragesAccordian[i].coverages = this.selectedCoverages;
                    this.coveragesAccordian[i].options = [];
                    this.coveragesAccordian[i].options = this.selectedOptions;
                    newVarient = false;
                }
            }
            if (newVarient) {
                let obj = {
                    "varient": this.selectedVarient,
                    "options": this.selectedOptions,
                    "coverages": this.selectedCoverages
                };
                this.coveragesAccordian.push(obj);
                console.log(this.coveragesAccordian);
            }
            this.selectedCoverages = [];
            this.activeVarient = this.selectedVarient;
            this.selectedVarient = '';
            this.selectedOptions = [];
        }
    }
    private deleteCoverages(cover, input) {// delete the complete accordian object
        let index: number = 0;
        for (let i = 0; i < this.coveragesAccordian.length; i++) {
            if (this.coveragesAccordian[i].varient === cover.varient) {
                index = i;
            }
        }
        this.coveragesAccordian.splice(index, 1);
        input.preventDefault();//Stops default propogation so that prevent href event to reload the page
    }
    private copyCoverages(cover, input) {// copy the complete accordian object to another
        if (this.selectedVarient != '') {
            this.selectedCoverages = cover.coverages;//manually copy coverages values and add to selected varient
            this.selectedOptions = cover.options;//manually copy option values and add to selected varient
            this.addCoverages();
        } else {
            alert('please select a varient to copy and then try !!!');
        }
        input.preventDefault();//Stops default propogation so that prevent href event to reload the page
    }
    private setActiveVarient(val) {//identify the active accordian(open state) and set the active value
        this.activeVarient = '';
        if (val.nextState) {//check if open
            this.activeVarient = val.panelId;// set active accordian id
        }
    }
    private _skipName(event: any): any {// get the id from name
        for (let i = 0; i < this.myCoverageList.length; i++) {
            if (this.myCoverageList[i].name == event) {
                return this.myCoverageList[i].id;
            }
        }
        return '';
    }
    private _skipId(event: any): any[] {// get the set of names from []of ids
        let menu = [];
        event.forEach((item) => {
            menu.push(this.myCoverageList[(item - 1)].name);
        });
        return menu;
    }

    private onSelectDiagnosis(event) {//Used to set selected state in dropdown option
        this.selectedDiag = [];
        this.selectedDiag = this._skipIdd(event);
    }

    private _skipIdd(event: any): any[] {// get the set of names from []of ids
       
        let menu = [];
        event.forEach((item) => {
             console.log(item);
            menu.push(this.diagnosisList[(item - 1)].name);
        });
        return menu;
    }

    public addDiagnosis() {
        this.selectedPanel = 0;
        this.activePanel = this.selectedPanel;
        console.log(this.selectedDiagnosis.length);
        this.diagnosisPanels = this.selectedDiag;
        console.log(this.diagnosisPanels);
    }



}
