import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import { ManpowerService } from './manpower.service';

@Component({
    selector: 'manpower',
    encapsulation: ViewEncapsulation.None,
    template: require('./manpower.html'),
    styles: [require('./manpower.scss')]
})
export class Manpower implements OnInit {

    constructor(private manpowerService: ManpowerService) {
    }
    private defaultSelect=null;
    private requestSourceId=this.defaultSelect;

    public manpower:any={
        staff:{
            doctor:'',
            consult:'',
            nurse:'',
            unregNurse:'',
            others:''
        },
        ratio:{
            ward:{
                nurse:'',
                bed:''
            },
            icu:{
                nurse:'',
                bed:''
            },
            doctor:{
                doctor:'',
                bed:''            
            },
            admin:{
                staff:'',
                bed:''            
            },
            provider:{
                provider:'',
                bed:''
            }
        },
        details:[],
        doctorOtherStaff:{
            "noOfQualifiedDoctors": {
                "providerInfrastructureId": null,
                "strengthCount": 10,
                "isDeleted": "N"
            },
            "noOfVisitingConsultant": {
                "providerInfrastructureId": null,
                "strengthCount": 20,
                "isDeleted": "N"
            },
            "noOfQualifiedRegisteredNurse": {
                "providerInfrastructureId": null,
                "strengthCount": 30,
                "isDeleted": "N"
            },
            "noOfQualifiedUnregisteredNurse": {
                "providerInfrastructureId": null,
                "strengthCount": 40,
                "isDeleted": "N"
            },
            "noOfQualifiedTechnician":{
                "providerInfrastructureId": null,
                "strengthCount": 40,
                "isDeleted": "N"
            },
            "subordinate": {
                "providerInfrastructureId": null,
                /*"otherInfrastructureName": "Ward boy",*/
                "strengthCount": 40,
                "isDeleted": "N"
            }
        },
        "hospital": {
            "wardBedNurseAntecedentNumber": 1,
            "wardBedNurseConsequentNumber": 2,
            "icuBedNurseAntecedentNumber": 3,
            "icuBedNurseConsequentNumber": 4,
            "bedDoctorAntecedentNumber": 5,
            "bedDoctorConsequentNumber": 6,
            "bedAdminStaffAntecedentNumber": 7,
            "bedAdminStaffConsequentNumber": 8,
            "bedProviderAreaAntecedentNumber": 9,
            "bedProviderAreaConsequentNumber": 10
        }
    };
    public titles=[
    {
        title:'Head of the Provider',
        url:'getmanpower',
        reqObj:'providerHead',
        myObj:[
            {
                "staffIdentifier": null,
                "staffName": "providerHead",
                "staffEmailAddress": "providerhead@gmail.com",
                "landlineNumber": {
                    "contactId": null,
                    "contactNumber": "044-27433100"
                },
                "mobileNumber": {
                    "contactId": null,
                    "contactNumber": "9003304000"
                },
                "isDeleted": "N"
            }
        ],
        inputs:{
            name:'my name',
            number:'',
            email:''
        }
    },
    {
        title:'Medical Superintendent',
        url:'getmanpower',
        reqObj:'medicalSuperintendent',
        myObj:[],
        inputs:{
            name:'',
            number:'',
            email:''
        }
    },
    {
        title:'Head Operation',
        url:'getmanpower',
        reqObj:'operationHead',
        myObj:[],
        inputs:{
            name:'',
            number:'',
            email:''
        }
    },
    {
        title:'Head of Emergency',
        url:'getmanpower',
        reqObj:'emergencyHead',
        myObj:[],
        inputs:{
            name:'',
            number:'',
            email:''
        }
    },
    {
        title:'Head of Medical Records',
        url:'getmanpower',
        reqObj:'medicalRecordsHead',
        myObj:[],
        inputs:{
            name:'',
            number:'',
            email:''
        }
    },
    {
        title:'Head of Marketing',
        url:'getmanpower',
        reqObj:'marketingHead',
        myObj:[],
        inputs:{
            name:'',
            number:'',
            email:''
        }
    },
    {
        title:'Head of Billing',
        url:'getmanpower',
        reqObj:'billingHead',
        myObj:[],
        inputs:{
            name:'',
            number:'',
            email:''
        }
    },
    {
        title:'Administrator',
        url:'getmanpower',
        reqObj:'administrator',
        myObj:[],
        inputs:{
            name:'',
            number:'',
            email:''
        }
    },
    {
        title:'Ambulance Coordinator',
        url:'getmanpower',
        reqObj:'ambulanceCoordinator',
        myObj:[],
        inputs:{
            name:'',
            number:'',
            email:''
        }
    },
    {
        title:'TPA coordinator',
        url:'getmanpower',
        reqObj:'TPAcoordinator',
        myObj:[],
        inputs:{
            name:'',
            number:'',
            email:''
        }
    }
];
 private areaUnitList=[{"areaUnitId": 119,"areaUnitName": "AreaUnit1"},{"areaUnitId": 120,"areaUnitName": "AreaUnit2"},{"areaUnitId": 121,"areaUnitName": "AreaUnit3"}];/*{"areaUnit": [{"areaUnitId": 119,"areaUnitName": "AreaUnit1"},{"areaUnitId": 120,"areaUnitName": "AreaUnit2"},{"areaUnitId": 121,"areaUnitName": "AreaUnit3"}]}*/
    
    ngOnInit() {
        if(this.titles){
            let response=this.fetchData1('get', 'getmanpower', 'requestObj');
            console.log(response);            
        }
    }

    fetchData1(method, url, req) {
           let outer=this;
        this.manpowerService.getChannel(method, url)
            .subscribe(
            results => {
                outer.setDatas(results);
                return results;
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            });
    }
    setDatas(details){
        /*let b = details.filter(function(item, index, array){
                return item;
        });*/
        //console.log(b);
        /*for(let i=0; i<this.titles.length; i++){
            this.titles[i].myObj=details[this.titles[i].reqObj];
        }*/

    }
    saveManpower(){
        this.manpower.details=[];
        for(let i=0; i<this.titles.length; i++){
            let temp:any={};
            temp.name=this.titles[i].title;
            temp.obj=this.titles[i].myObj;
            this.manpower.details.push(temp);
        }
    }
    
}