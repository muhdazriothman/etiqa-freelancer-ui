import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/freelancer' },
  { path: 'freelancer', loadChildren: () => import('./pages/freelancer-list/freelancer-list.module').then(m => m.FreelancerListModule) },
  { path: 'freelancer/add', loadChildren: () => import('./pages/add-freelancer/add-freelancer.module').then(m => m.AddFreelancerModule) },
  { path: 'freelancer/edit/:id', loadChildren: () => import('./pages/edit-freelancer/edit-freelancer.module').then(m => m.EditFreelancerModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
