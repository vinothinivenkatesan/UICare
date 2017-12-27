import { Routes, RouterModule } from '@angular/router';
import { Provider } from './provider.component';
import { Home } from './home/home.component';
import { Preferrednetwork } from './preferrednetwork/preferrednetwork.component';
import { Createnetwork } from './createnetwork/createnetwork.component';
import { Register } from './register/register.component';
import { Empanelment } from './empanelment/empanelment.component';
import { FileUpload } from './fileUpload/fileUpload.component';
import { ImgSize } from './imgSize/imgSize.component';
import { TariffCompare } from './tariffcompare/tariffcompare.component';

const routes: Routes = [
    {
        path: '',
        component: Provider,
        children: [
            { path: 'home', component: Home },
            { path: 'home/registration', component: Register },
            { path: 'home/empanelment', component: Empanelment },
            { path: 'home/fileupload', component: FileUpload },
            { path: 'home/imgsize', component: ImgSize },
            { path: 'preferrednetwork', component: Preferrednetwork },
            { path: 'preferrednetwork/createnetwork', component: Createnetwork },
            { path: 'tariffcomparision', component: TariffCompare }
        ]
    }
];

export const routing = RouterModule.forChild(routes);
