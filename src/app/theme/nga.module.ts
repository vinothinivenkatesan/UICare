import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BsThemeConfig } from './theme.config';
import { BsThemeConfigProvider } from './theme.configProvider';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { ModalModule } from 'ng2-bootstrap/modal';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { CustomFormsModule } from 'ng2-validation';
import { MyDatePickerModule } from 'mydatepicker';

import {
    BsBackTop,
    BsCard,
    BsCheckbox,
    BsContentTop,
    BsMenuItem,
    BsMenu,
    BsMsgCenter,
    BsMultiCheckbox,
    BsPageTop,
    BsPictureUploader,
    BsSidebar,
    ScrollTabs,
    ScrollTab,
    BsDualList,
    Uploader,
    OptionTag,
    ToggleInputs,
    Inputwrapper,
    Custommodal
} from './components';

import { BsCardBlur } from './components/bsCard/bsCardBlur.directive';

import {
    BsScrollPosition,
    BsSlimScroll,
    BsThemeRun,
    EmailPattern,
    InputAddon
} from './directives';

import {
    BsAppPicturePipe,
    BsKameleonPicturePipe,
    BsProfilePicturePipe
} from './pipes';

import {
    BsImageLoaderService,
    BsThemePreloader,
    BsThemeSpinner,
    Privileges,
    WebService,
    ReferenceData
} from './services';

import {
    EmailValidator,
    EqualPasswordsValidator,
} from './validators';

const NGA_COMPONENTS = [
    BsBackTop,
    BsCard,
    BsCheckbox,
    BsContentTop,
    BsMenuItem,
    BsMenu,
    BsMsgCenter,
    BsMultiCheckbox,
    BsPageTop,
    BsPictureUploader,
    BsSidebar,
    ScrollTabs,
    ScrollTab,
    BsDualList
];

const APP_CUSTOM_COMPONENTS = [
    Uploader,
    OptionTag,
    ToggleInputs,
    Inputwrapper,
    Custommodal
];

const NGA_DIRECTIVES = [
    BsScrollPosition,
    BsSlimScroll,
    BsThemeRun,
    BsCardBlur,
    EmailPattern,
    InputAddon
];

const NGA_PIPES = [
    BsAppPicturePipe,
    BsKameleonPicturePipe,
    BsProfilePicturePipe
];

const NGA_SERVICES = [
    BsImageLoaderService,
    BsThemePreloader,
    BsThemeSpinner,
    Privileges,
    WebService,
    ReferenceData
];

const NGA_VALIDATORS = [
    EmailValidator,
    EqualPasswordsValidator
];

@NgModule({
    declarations: [
        FileSelectDirective,
        FileDropDirective,
        ...NGA_PIPES,
        ...NGA_DIRECTIVES,
        ...NGA_COMPONENTS,
        ...APP_CUSTOM_COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        CustomFormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        MyDatePickerModule,
    ],
    exports: [
        FileSelectDirective,
        FileDropDirective,
        ...NGA_PIPES,
        ...NGA_DIRECTIVES,
        ...NGA_COMPONENTS,
        ...APP_CUSTOM_COMPONENTS
    ]
})
export class NgaModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: NgaModule,
            providers: [
                BsThemeConfigProvider,
                BsThemeConfig,
                ...NGA_VALIDATORS,
                ...NGA_SERVICES
            ],
        };
    }
}
