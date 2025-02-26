import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'dog-list', loadChildren: () => import('./pages/dog-list/dog-list.module').then(m => m.DogListPageModule) },
  { path: 'dog-detail/:id', loadChildren: () => import('./pages/dog-detail/dog-detail.module').then(m => m.DogDetailPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
