import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'coverage-master',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./coverageMaster.scss')],
    template: require('./coverageMaster.html')
})
export class CoverageMaster {
 page: number = 1;
 tableschema = {
        "name": "Coverage Master",
        "schema": [
            {
                "name": "coverageId",
                "title": "Coverage Id",
                "type": "number"
            },
            {
                "name": "coverage_Name",
                "title": "Coverage Name",
                "type": "string"
            },
            {
                "name": "coverage_Lob",
                "title": "Coverage Lob",
                "type": "string"
            }
        ],
        "references": [
            {
                "coverageId": 11,
                "coverage_Name": "Inpatient Treatment",
                "coverage_Lob": "health"
            },
            {
                "coverageId": 12,
                "coverage_Name": "Post Hospitalization",
                "coverage_Lob": "wealth"
            },
            {
                "coverageId": 13,
                "coverage_Name": "Post Hospitalization",
                "coverage_Lob": "health"
            },
            {
                "coverageId": 14,
                "coverage_Name": "ICU Hospitalization",
                "coverage_Lob": "wealth"
            },
            {
                "coverageId": 15,
                "coverage_Name": "Inpatient Treatment",
                "coverage_Lob": "health"
            },
            {
                "coverageId": 26,
                "coverage_Name": "Post Hospitalization",
                "coverage_Lob": "health"
            },
            {
                "coverageId": 27,
                "coverage_Name": "ICU Hospitalization",
                "coverage_Lob": "wealth"
            },
            {
                "coverageId": 28,
                "coverage_Name": "Inpatient Hospitalization",
                "coverage_Lob": "health"
            },
            {
                "coverageId": 29,
                "coverage_Name": "Post Treatment",
                "coverage_Lob": "Health"
            },
            {
                "coverageId": 40,
                "coverage_Name": "Post Hospitalization",
                "coverage_Lob": "Wealth"
            }
        ],
        "totalNumberOfRecords": 10
    };


    mySchema = {
        "properties": {
            "coverageId": { "type": "string", "description": "coverageId" },
            "coverage_Name": { "type": "string", "description": "coverage_Name" },
            "coverage_Lob": {
                "type": "string",
                "description": "coverage_Lob",
                "widget": "select",
                "oneOf": [{
                    "description": "Health", "enum": ["health"]
                }, {
                    "description": "Wealth", "enum": ["wealth"]
                }],
                "default": "health"
            },
            "Expiry_Date": { "type": "string", "description": "Expiry_Date", "widget": "date" },
            "Status": {
                "type": "string",
                "description": "Status",
                "widget": "radio",
                "oneOf": [{
                    "description": "Active",
                    "enum": ["active"]
                },
                {
                    "description": "Inactive",
                    "enum": ["inactive"]
                }]
            },
            "Bulk_upload": {
                "type": "string",
                "description": "Bulk_upload",
                "widget": "file"
            }
        },
        "buttons": [{
            "id": "add", // the id of the action callback
            "label": "Add" // the text inside the button
        }]
    }



    myActions = {
        "add": (property) => {
            let pushdata = property.value;
            this.tableschema.references.push(pushdata);
            console.log(this.tableschema.references);
        },
        "update": (property) => {
            let pushdata = property.value;
            this.tableschema.references.push(pushdata);
            console.log(this.tableschema.references);
        },
        "reset": (property) => { property.reset() }
    }

    myModel = {};

    onSubmit(event) {
        console.log(event)
    }

    onChanges(event) {
        console.log(event)
    }

    generateArray(obj) {
        return Object.keys(obj).map((key) => {
            //console.log(key + ' -> ' + obj[key]); 
            return obj[key];
        });
    }

    generateKeys(obj) {
        return Object.keys(obj).map((key) => { return key });
    }

    showid(row) {
        console.log(row);
        this.myModel = row;
        //        var keys: string[] = this.generateKeys(this.tableschema.references[num]);
        //        var values: string[] = this.generateArray(this.tableschema.references[num]);
        //        //alert("This will open edit Modal for " + keys[0] + ":" + values[0]);
        //        this.myModel = this.tableschema.references[num];
        this.mySchema.buttons[0].label = "Update";
        this.mySchema.buttons[0].id = "update";
    }

    deleteid(row) {
        let index = this.tableschema.references.indexOf(row);
        this.tableschema.references.splice(index, 1);
    }
    
}