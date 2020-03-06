import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
       path: 'suppliers',
    loadChildren: () => import('./../suppliers/suppliers.module').then( m => m.SuppliersPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./../food/food.module').then( m => m.FoodPageModule)
  }
    ]
  },
  {
    path:'',
    redirectTo:'/menu/suppliers',
    // pathMatch:Full
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
  