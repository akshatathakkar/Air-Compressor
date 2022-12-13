import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockNavigationComponent } from './mock-navigation/mock-navigation.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'mac1', component: ProductListComponent },
  { path: 'mac2', component: MockNavigationComponent },
  { path: 'mac3', component: MockNavigationComponent },
  { path: 'sac1', component: MockNavigationComponent },
  { path: 'sac2', component: MockNavigationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
