import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFreelancerComponent } from './add-freelancer.component';

const routes: Routes = [
  { path: '', component: AddFreelancerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddFreelancerRoutingModule { }
