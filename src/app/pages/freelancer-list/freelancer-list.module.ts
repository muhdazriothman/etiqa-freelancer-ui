import { NgModule } from '@angular/core';
import { FreelancerListRoutingModule } from './freelancer-list-routing.module';
import { FreelancerListComponent } from './freelancer-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  imports: [
    FreelancerListRoutingModule,
    NzTableModule,
    CommonModule,
    NzDividerModule,
    NzButtonModule,
    NzGridModule,
    NzTypographyModule
  ],
  declarations: [FreelancerListComponent],
  exports: [FreelancerListComponent]
})
export class FreelancerListModule { }
