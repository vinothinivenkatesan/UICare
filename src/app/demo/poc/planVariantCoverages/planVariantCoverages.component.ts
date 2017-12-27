import {Component, ViewEncapsulation} from '@angular/core';
import {IMultiSelectOption,IMultiSelectTexts,IMultiSelectSettings} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { TagInputModule } from 'ng2-tag-input'; 

@Component({
  selector: 'plan-variant',
  encapsulation: ViewEncapsulation.None,
  template: require('./planVariantCoverages.html'),
  styles:[require('./planVariantCoverages.scss')]
})
export class PlanVariantCoverages {
  public selectedOptions: number[];//[]of number contains 'selected' options 'id list'
  public selectedCoverages: string[];//[]of string contains 'selected' options 'name list'
  public selectedVarient: any;//string assings the currently select (variant) name on singel-select dropdown
  public activeVarient: any;//string tells the active (open) accordian id;
  public myCoverageList: IMultiSelectOption[] = [
        { id: 1, name: 'Exclusion 1 / Testarea' },
        { id: 2, name: 'Exclusion 2' },
        { id: 3, name: 'Exclusion 3' },
        { id: 4, name: 'Exclusion 4' },
        { id: 5, name: 'Exclusion 5' },
        { id: 6, name: 'Exclusion 6' }
      ];//multiple dropdown option object [{id:number, name:'any'},..]
  /*
  [] of object accordian,
  each object has 3 property 
  # "varient: accordian-titel(from singel-select dropdown)"
  # "coverages: []of string contains selected coverages for the varient, accordian-content-> tags (from multi-select dropdown)"
  # "options: []of number contains selected coverages for the varient, Used to assing back the selection to multi-select dropdown"
  */
  public coveragesAccordian:any=[];

  constructor() {
  }
  private onVarientChange(event){//Get the dropdown values (coverages) for corresponding (varient) value
   this.selectedOptions=[];
   for(let i=0; i<this.coveragesAccordian.length; i++){
      if(this.coveragesAccordian[i].varient === this.selectedVarient)
      {
        this.selectedOptions=this.coveragesAccordian[i].options;
      }
   }
   this.onCoverageChange(this.selectedOptions)
 }
 private onCoverageChange(event){//Used to set selected state in dropdown option
   this.selectedCoverages=[];
   this.selectedCoverages=this._skipId(event);
 }
 private removeTag(event, cover){//used to remove selected options value in object which is used in setting dropdown select state
  let idValue=this._skipName(event);
   cover.options.splice(cover.options.indexOf(idValue),1);
 }
 private clearSelection(){   
   this.selectedVarient='';
   this.selectedCoverages=[];
   this.selectedOptions=[];
 }
 private addCoverages(){// To add a new/update accordian object
   if(this.selectedVarient!='' && this.selectedCoverages!=[] && this.selectedOptions!=[]){
      let index
      let newVarient:boolean=true;//checks for new (to add)
          for(let i=0; i<this.coveragesAccordian.length; i++){//check for update if exicts
            if(this.coveragesAccordian[i].varient === this.selectedVarient)
              {
                this.coveragesAccordian[i].coverages=[];
                this.coveragesAccordian[i].coverages=this.selectedCoverages;
                this.coveragesAccordian[i].options=[];
                this.coveragesAccordian[i].options=this.selectedOptions;
                newVarient=false;
              }
          }
          if(newVarient){
            let obj={
                "varient":this.selectedVarient,
                "options":this.selectedOptions,
                "coverages":this.selectedCoverages
              };
            this.coveragesAccordian.push(obj);
          }
          this.selectedCoverages=[];
          this.activeVarient=this.selectedVarient;
          this.selectedVarient='';
          this.selectedOptions=[];
   }
 }
 private deleteCoverages(cover, input){// delete the complete accordian object
   let index:number=0;
    for(let i=0; i<this.coveragesAccordian.length; i++){
      if(this.coveragesAccordian[i].varient === cover.varient)
      {
        index=i;
      }
    }
    this.coveragesAccordian.splice(index,1);
    input.preventDefault();//Stops default propogation so that prevent href event to reload the page
 }
 private copyCoverages(cover, input){// copy the complete accordian object to another
   if(this.selectedVarient!=''){
     this.selectedCoverages=cover.coverages;//manually copy coverages values and add to selected varient
     this.selectedOptions=cover.options;//manually copy option values and add to selected varient
     this.addCoverages();
   }else{
     alert('please select a varient to copy and then try !!!');
   }
   input.preventDefault();//Stops default propogation so that prevent href event to reload the page
 }
 private setActiveVarient(val){//identify the active accordian(open state) and set the active value
   this.activeVarient='';
   if(val.nextState){//check if open
    this.activeVarient=val.panelId;// set active accordian id
   }
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

}
