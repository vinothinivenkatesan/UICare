import { Routes, RouterModule }  from '@angular/router';
import { Product } from './product.component';
import { Home } from './home/home.component';
import { Createproduct } from './createproduct/createproduct.component';

const routes: Routes = [
  {
    path: '',
    component: Product,
   children: [
      { path: 'home', component: Home },
      { path: 'home/createproduct', component: Createproduct }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
