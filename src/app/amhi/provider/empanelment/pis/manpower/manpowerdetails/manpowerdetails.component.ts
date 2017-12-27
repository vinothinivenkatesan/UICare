import { Component, ViewEncapsulation, ViewChild, Input, OnInit } from '@angular/core';


@Component({
  selector: 'manpower-details',
  /*styles: [require('./.scss')],*/
  template: require('./manpowerdetails.html'),
  encapsulation: ViewEncapsulation.None
})
export class Manpowerdetails implements OnInit {
    @Input() heading:String;
    @Input() requestObj:String;
    @Input() serviceUrl:String;
    @Input() savedObj:any;
    @Input() activeObj:any;

    //let outer=this;
    public edit:number=-1;
    public details:any=[];
    public result:any;
    //@Input() url:String;
    //@Input() bsCardClass:String;
    constructor(/*private reusableService: ReusablesService*/){
    }
    ngOnInit() {
        /*if(this.requestObj){
            this.fetchData('get', 'getmanpower', this.requestObj);
        }*/
    }
    addData(obj){
        if(this.edit!=-1){
            this.savedObj[this.edit].staffName=obj.name;
            this.savedObj[this.edit].mobileNumber.contactNumber=obj.number;
            this.savedObj[this.edit].staffEmailAddress=obj.email;
            obj.name='';
            obj.number='';
            obj.email='';
            this.edit=-1;
        }
        else if(obj.name!='' && obj.number!='' && obj.email!=''){
            let ob:any={};
            ob.staffIdentifier=null;
            ob.staffName=obj.name;
            ob.mobileNumber={"contactId": null,"contactNumber": ""}
            ob.mobileNumber.contactNumber=obj.number;
            ob.staffEmailAddress=obj.email;
            ob.isDeleted='N';
            //this.savedObj.push(ob);
            this.savedObj.push({"staffIdentifier": null,"staffName": obj.name,"staffEmailAddress": obj.email,"mobileNumber": {"contactId": null,"contactNumber": obj.number},"isDeleted": "N"});
            //this.savedObj.push({'name':obj.name,'number':obj.number,'email':obj.email});
            obj.name='';
            obj.number='';
            obj.email='';
        }else{
            alert('please enter all the fields');
        }
    }
    editDetail(iter, parentObj, obj){
        this.edit=iter;
        obj.name=parentObj[iter].staffName;
        obj.number=parentObj[iter].mobileNumber.contactNumber;
        obj.email=parentObj[iter].staffEmailAddress;
    }
    deleteDetail(iter, parentObj){
        parentObj[iter].isDeleted='Y';
        //parentObj.splice(iter,1);
    }

}
