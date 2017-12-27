import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './forms.routing';
import { TagInputModule } from 'ng2-tag-input';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { UiSwitchModule } from 'angular2-ui-switch';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { TypeaheadModule } from 'ng2-bootstrap/typeahead';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { MyDatePickerModule } from 'mydatepicker';

import { CustomFormsModule } from 'ng2-validation';

import { Forms } from './forms.component';
import { Inputs } from './components/inputs';
import { Layouts } from './components/layouts';
import { Validations } from './components/validations';


import { StandardInputs } from './components/inputs/components/standardInputs';
import { ValidationInputs } from './components/inputs/components/validationInputs';
import { GroupInputs } from './components/inputs/components/groupInputs';
import { CheckboxInputs } from './components/inputs/components/checkboxInputs';
import { SelectInputs } from './components/inputs/components/selectInputs';
import { DatePicker } from './components/inputs/components/datePicker';
import { TagInputs } from './components/inputs/components/tagInputs';
import { MultiSelectInputs } from './components/inputs/components/multiSelectInputs';
import { UploadInputs } from './components/inputs/components/uploadInputs';
import { DualListBox } from './components/inputs/components/dualListbox';
import { StepWizard } from './components/inputs/components/stepWizard';
import { Paginations } from './components/inputs/components/paginations';
import { SwitchInput } from './components/inputs/components/switchInput';
import { TypeAhead } from './components/inputs/components/typeAhead';
import { Rating } from './components/inputs/components/rating';


import { InlineForm } from './components/layouts/components/inlineForm';
import { BlockForm } from './components/layouts/components/blockForm';
import { HorizontalForm } from './components/layouts/components/horizontalForm';
import { BasicForm } from './components/layouts/components/basicForm';
import { WithoutLabelsForm } from './components/layouts/components/withoutLabelsForm';
import { ValidationForm } from './components/layouts/components/validationForm';
import { ReactiveForm } from './components/layouts/components/reactiveForm';


import { Templatetypes } from './components/validations/components/templatetypes';
import { Inputvalidate } from './components/validations/components/inputvalidate';
import { Inputtypes } from './components/validations/components/inputtypes';

@Directive({
    selector: '[ WizardStepComponent,WizardComponent]'
})

@NgModule({
    imports: [
        CommonModule,
        AngularFormsModule,
        ReactiveFormsModule,
        NgaModule,
        routing,
        TagInputModule,
        MultiselectDropdownModule,
        UiSwitchModule,
        CustomFormsModule,
        JWBootstrapSwitchModule,
        TypeaheadModule.forRoot(),
        PaginationModule.forRoot(),
        MyDatePickerModule
    ],
    declarations: [
        Layouts,
        Inputs,
        Forms,
        Validations,
        StandardInputs,
        ValidationInputs,
        GroupInputs,
        CheckboxInputs,
        SelectInputs,
        DualListBox,
        InlineForm,
        BlockForm,
        HorizontalForm,
        BasicForm,
        WithoutLabelsForm,
        ValidationForm,
        ReactiveForm,
        DatePicker,
        TagInputs,
        MultiSelectInputs,
        UploadInputs,
        StepWizard,
        Paginations,
        TypeAhead,
        SwitchInput,
        Rating,

        Templatetypes,
        Inputvalidate,
        Inputtypes
    ]
})
export default class FormsModule {
}
