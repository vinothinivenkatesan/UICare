import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'accordion',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./accordion.scss')],
    template: require('./accordion.html')
})
export class Accordion {
    private sub: any;
    private id: any;
    private master_name: String;
    private schema: string[];
    private schemaval: string[];
    private references: string[];
    private noofrecords: number;

    private firstpage: boolean = true;
    private lastpage: boolean = false;

    constructor() { }

    private ngOnInit() {
        //    this.route.params
        //      .map(params => params['id'])
        //      .switchMap(id => this._refService.getData(id))
        //      .retry(2)
        //      .subscribe(
        //      data => {
        //        this.master_name = data.name;
        //        this.schema = data.schema;
        //        this.references = data.references;
        //        this.noofrecords = data.totalNumberOfRecords;
        //      },
        //      err => { console.log('err occured' + err) },
        //      () => console.log('done')
        //      )
    }
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
            },
            {
                "name": "Expiry_Date",
                "title": "Expiry_Date",
                "type": "string"
            }
        ],
        "references": [
            {
                "coverageId": 11,
                "coverage_Name": "Inpatient Treatment",
                "coverage_Lob": "health",
                "Expiry_Date": "2017-01-03"
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


    demoSchema = {

        "properties": {
            "firstName": {
                "type": "string",
                "placeholder": "First name",
                "minLength": 2,
                "maxLength": 40,
                "title": "First name",
                "description": "First name"
            },
            "lastName": {
                "type": "string",
                "placeholder": "Last name",
                "minLength": 2,
                "maxLength": 40,
                "title": "Last name",
                "description": "Last name"
            },
            "bornOn": {
                "type": "string",
                "format": "date",
                "widget": "date",
                "default": "1800-12-12",
                "placeholder": "Ex: 2009-03-11",
                "description": "Born on"
            },
            "moreInfo": {
                "type": "boolean",
                "widget": "checkbox",
                "description": "More information?",
                "default": true
            },
            "survey": {
                "type": "object",
                "description": "Little survey",
                "properties": {
                    "q1": {
                        "type": "string",
                        "description": "Enter a number"
                    },
                    "q2": {
                        "type": "object",
                        "description": "Address",
                        "properties": {
                            "color": {
                                "description": "color",
                                "type": "string",
                                "default": "#aaa000",
                                "pattern": "ff$",
                                "widget": "color"
                            },
                            "zip": {
                                "description": "zip",
                                "type": "number",
                                "default": 15
                            }
                        }
                    }
                }
            },
            "favoriteColor": {
                "type": "string",
                "pattern": "^#[0-9a-fA-F]{6}$",
                "widget": "color",
                "default": "#aaa111",
                "description": "Favorite color",
                "visibleIf": {
                    "moreInfo": [true]
                }
            },
            "transactionNumber": {
                "type": "integer",
                "minimum": 0,
                "description": "Transaction number"
            },
            "transactionDescription": {
                "type": "string",
                "widget": "textline",
                "description": "What is being transacted"
            },
            "category": {
                "type": "string",
                "widget": "select",
                "oneOf": [{
                    "description": "Design",
                    "enum": ["design"]
                },
                {
                    "description": "High-Tech",
                    "enum": ["hightech"]
                },
                {
                    "description": "Materials",
                    "enum": ["materials"]
                },
                {
                    "description": "Services",
                    "enum": ["services"]
                }],
                "description": "Category"
            },
            "promotion": {
                "type": "string",
                "description": "Promotion",
                "widget": "radio",
                "oneOf": [{
                    "description": "Student discount (20%)",
                    "enum": ["student"]
                },
                {
                    "description": "Summer 2016 discount (15%)",
                    "enum": ["summer"]
                }, {
                    "description": "None",
                    "enum": ["none"]
                }]
            },
            "confirmationMail": {
                "type": "string",
                "description": "Email",
                "format": "email"
            },
            "password": {
                "type": "string",
                "widget": "password",
                "description": "Password"
            },
            "numberOfBoxes": {
                "type": "number",
                "widget": {
                    "id": "range"
                },
                "description": "Number of boxes required",
                "minimum": 1,
                "maximum": 10
            },
            "deliveryService": {
                "type": "string",
                "widget": "select",
                "description": "Delivery service",
                "oneOf": [{
                    "description": "UPS",
                    "enum": ["ups"]
                },
                {
                    "description": "FedEx",
                    "enum": ["fedex"]
                }, {
                    "description": "Other",
                    "enum": ["other"]
                }],
                "default": "fedex"
            },
            "otherDeliveryService": {
                "type": "string",
                "minLength": 2,
                "visibleIf": {
                    "deliveryService": ["other"]
                }
            },
            "freeShipping": {
                "type": "boolean",
                "widget": "checkbox",
                "description": "Free shipping",
                "visibleIf": {
                    "deliveryService": ["other", "ups"]
                }
            },
            "shippingPrice": {
                "type": "number",
                "description": "ShippingCost",
                "minimum": 0,
                "maximum": 200,
                "visibleIf": {
                    "freeShipping": [false]
                }
            },
            "sendApologies": {
                "type": "boolean",
                "widget": "checkbox",
                "description": "Send apologies for the shipping cost",
                "visibleIf": {
                    "shippingPrice": [22, 23]
                }
            },
            "useCustomEmail": {
                "type": "boolean",
                "description": "Write a custom email ?"
            },
            "customEmail": {
                "type": "string",
                "widget": "textarea",
                "description": "Email to send",
                "visibleIf": {
                    "useCustomEmail": [true]
                },
                "pattern": "^<h1>"
            },
            "userManual": {
                "type": "string",
                "widget": "file",
                "description": "Add a manual for the delivered items",
                "readOnly": "true",
                "visibleIf": {
                    "category": ["hightech"]
                }
            },
            "colors": {
                "type": "array",
                "description": "Colors",
                "index": "i",
                "items": {
                    "type": "string",
                    "description": "Color $i",
                    "widget": "color",
                    "buttons": [{
                        "label": "Supprimer",
                        "id": "Remove"
                    }]
                },
                "buttons": [{
                    "label": "Ajouter",
                    "id": "addItem",
                    "parameters": {
                        "value": "#afeadd"
                    }
                }, {
                    "label": "Reset",
                    "id": "reset"
                }]
            }
        },
        "buttons": [{
            "label": "Alert",
            "id": "alert"
        },
        {
            "label": "Reset",
            "id": "reset"
        }],
        "fieldsets": [{
            "id": "part_1",
            "title": "Part 1 - Recipient",
            "fields": ["firstName", "lastName", "bornOn", "moreInfo", "colors", "survey"]
        },
        {
            "id": "part_2",

            "title": "Part 2 - Transaction",
            "fields": ["transactionNumber", "transactionDescription", "promotion", "category", "userManual"]
        },
        {
            "id": "part_3",
            "title": "Part 3 - Shipping",
            "fields": ["numberOfBoxes", "deliveryService", "otherDeliveryService", "freeShipping", "shippingPrice", "sendApologies"]
        },
        {
            "id": "part_4",
            "title": "Part 4 - Email",
            "fields": ["useCustomEmail", "customEmail"]
        },
        {
            "id": "part_5",
            "title": "Part 5 - Confirmation",
            "fields": ["confirmationMail", "password"]
        }],
        "required": ["firstName", "lastName", "transactionNumber", "password"]
    }
}
