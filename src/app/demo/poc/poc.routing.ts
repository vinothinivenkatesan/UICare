import { Routes, RouterModule } from '@angular/router';
import { Poc } from './poc.component';
import { ReferenceData } from './referenceData/referenceData.component';
import { ClaimEntry } from './claimEntry/claimEntry.component';
import { PlanVariantCoverages } from './planVariantCoverages/planVariantCoverages.component';
import { TagWithMultiselect } from './tagWithMultiselect/tagWithMultiselect.component';
import { Crud } from './crud/crud.component';
import { CoverageMaster } from './coverageMaster/coverageMaster.component';

const routes: Routes = [
    {
        path: '',
        component: Poc,
        children: [
            { path: 'referecedata', component: ReferenceData },
            { path: 'claimentry', component: ClaimEntry },
            { path: 'planvariantcoverages', component: PlanVariantCoverages },
            { path: 'tagWithMultiselect', component: TagWithMultiselect },
            { path: 'crud', component: Crud },
            { path: 'coverageMaster', component: CoverageMaster }
        ]
    }
];

export const routing = RouterModule.forChild(routes);
