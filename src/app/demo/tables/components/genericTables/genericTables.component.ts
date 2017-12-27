import { Component, ViewEncapsulation, EventEmitter, Output, ViewChild } from '@angular/core';
import { GtConfig, GenericTableComponent } from 'angular-generic-table';
import { GenericTablesService } from './genericTables.service';
import { Response, Http } from '@angular/http';

@Component({
    selector: 'basic-tables',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./genericTables.scss')],
    template: require('./genericTables.html')
})
export class GenericTables {

    public configObject: GtConfig<any>;
    public tableInfo = {};
    public hello = 'yes';
    public refresh = true;
    public All: boolean = true;
    public Male: boolean = false;
    public Female: boolean = false;

    @Output() data = new EventEmitter();
    @ViewChild(GenericTableComponent)
    private myTable: GenericTableComponent<any, any>;
    public showColumnControls = false;


    constructor(private http: Http) {

        //        let url = 'https://private-730c61-generictable.apiary-mock.com/data'; // apiary end point


        this.configObject = {
            settings: [
                {
                    objectKey: 'id',
                    visible: true,
                    sort: 'asc',
                    columnOrder: 0
                }, {
                    objectKey: 'name',
                    visible: true,
                    sort: 'enable',
                    columnOrder: 1
                }, {
                    objectKey: 'email',
                    visible: true,
                    enabled: true,
                    sort: 'enable',
                    sortOrder: 0,
                    columnOrder: 2
                }, {
                    objectKey: 'gender',
                    visible: true,
                    enabled: true,
                    sort: 'enable',
                    sortOrder: 0,
                    columnOrder: 3,
                    search: false
                }, {
                    objectKey: 'favorite_color',
                    visible: true,
                    enabled: true,
                    sort: 'disable',
                    sortOrder: 0,
                    columnOrder: 4,
                    search: false
                }],
            fields: [
                {
                    name: 'Id',
                    objectKey: 'id',
                    classNames: 'clickable sort-numeric',
                    expand: true
                }, {
                    name: 'Name',
                    objectKey: 'name',
                    classNames: 'sort-string',
                    value: function(row) { return row.first_name + ' ' + row.last_name },
                    render: function(row) { return '<div>' + row.first_name + ' ' + row.last_name + '</div>' }
                }, {
                    name: 'Favorite color',
                    objectKey: 'favorite_color',
                    classNames: 'text-xs-right',
                    render: function(row) { return '<div style="float:right;width:15px;height:15px;border-radius:50%;background: ' + row.favorite_color + '"></div>' },
                    click: (row) => { return console.log(row.first_name + '\'s favorite color is: ' + row.favorite_color); }
                }, {
                    name: 'Gender',
                    classNames: 'sort-string',
                    objectKey: 'gender'
                }, {
                    name: 'Email',
                    classNames: 'sort-string',
                    objectKey: 'email',
                    render: function(row) { return '<a href="mailto:' + row.email + '">' + row.email + '</a>' }
                }],
            data: [
                { "id": 1, "first_name": "Margaret", "last_name": "Cox", "email": "mcox0@1688.com", "gender": "Female", "favorite_color": "#547ab1", "birthday": "1980-07-30T03:59:26Z" },
                { "id": 2, "first_name": "Angela", "last_name": "Ramos", "email": "aramos1@freewebs.com", "gender": "Female", "favorite_color": "#0acdb2", "birthday": "1975-05-02T20:21:32Z" },
                { "id": 3, "first_name": "Jesse", "last_name": "Alvarez", "email": "jalvarez2@irs.gov", "gender": "Male", "favorite_color": "#719534", "birthday": "1993-01-30T12:56:10Z" },
                { "id": 4, "first_name": "Joe", "last_name": "Kelly", "email": "jkelly3@delicious.com", "gender": "Male", "favorite_color": "#73c09b", "birthday": "1996-10-10T13:59:22Z" },
                { "id": 5, "first_name": "Victor", "last_name": "Reed", "email": "vreed4@bandcamp.com", "gender": "Male", "favorite_color": "#084b66", "birthday": "1997-04-09T19:37:04Z" },
                { "id": 6, "first_name": "Louis", "last_name": "Hall", "email": "lhall5@google.fr", "gender": "Male", "favorite_color": "#2d3939", "birthday": "1991-07-18T07:43:36Z" },
                { "id": 7, "first_name": "Christine", "last_name": "Simpson", "email": "csimpson6@hatena.ne.jp", "gender": "Female", "favorite_color": "#03ee0d", "birthday": "1982-05-08T11:12:21Z" }]
        };
        //        http.get(url)
        //            .map((res: Response) => res.json())
        //            .subscribe(res => {
        //                this.configObject.data = res.data;
        //            });
    }

    public addData = function() {

        // create mock data
        let random = Math.floor(Math.random() * this.configObject.data.length - 1) + 1;
        let firstName = this.configObject.data[random].first_name;
        let lastName = this.configObject.data[Math.floor(Math.random() * this.configObject.data.length - 1) + 1].last_name;
        let gender = this.configObject.data[random].gender;
        let favoriteColor = this.configObject.data[Math.floor(Math.random() * this.configObject.data.length - 1) + 1].favorite_color;
        let birthday = this.configObject.data[Math.floor(Math.random() * this.configObject.data.length - 1) + 1].birthday;

        // push data to data array (could be swapped to a method for persisting the data to a database).
        this.configObject.data.push({
            "id": this.configObject.data.length + 1,
            "first_name": firstName,
            "last_name": lastName,
            "email": firstName + '.' + lastName + '@some_email_address.xyz',
            "gender": gender,
            "favorite_color": favoriteColor,
            "birthday": birthday
        });
    };


    /** Apply predefined filter using first_name.
     * */
    public applyFilter = function() {
        this.myTable.gtApplyFilter({
            first_name: ['Victor', 'Joe', 'Carol']
        })
    };

    public filter(Table, filterVal: any) {
        if (filterVal == 'Female') {
            Table.gtApplyFilter({
                'gender': ['Female']
            })
            this.All = false;
            this.Male = false;
            this.Female = true;
        }
        else {
            if (filterVal == 'Male') {
                Table.gtApplyFilter({
                    'gender': ['Male']
                })
                this.All = false;
                this.Male = true;
                this.Female = false;
            }
        }
    }

    /** Apply search
     * */
    public applySearch = function(value: string) {
        console.log(value);
        this.myTable.gtSearch(value);
    };

    public exportData() {
        this.myTable.exportCSV('MyExport.csv');
    }

}
