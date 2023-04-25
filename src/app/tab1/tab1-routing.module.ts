import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdResolverService } from '../services/prod-resolver.service';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule),
    resolve:{product:ProdResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
