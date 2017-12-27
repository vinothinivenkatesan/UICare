import { Component } from '@angular/core';
import { IMyOptions, IMyDate } from 'mydatepicker';

@Component({
    selector: 'date-picker',
    template: require('./datePicker.html'),
})

export class DatePicker {

    private model: Object = { date: { year: 2017, month: 4, day: 6 } };

    myDatePickerOptions: IMyOptions = {
        dayLabels: {su: 'Su', mo: 'Mo', tu: 'Tu', we: 'We', th: 'Th', fr: 'Fr', sa: 'Sa'},
        monthLabels: { 1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December' },
        showTodayBtn: false,
        dateFormat: 'yyyy-mm-dd',
        firstDayOfWeek: 'su',
        sunHighlight: false,
        inline: false,
        disableUntil: { year: 2016, month: 8, day: 10 },
        selectionTxtFontSize: '14px',
        showClearDateBtn: false,
        alignSelectorRight: true
    };

    constructor() { }
}
