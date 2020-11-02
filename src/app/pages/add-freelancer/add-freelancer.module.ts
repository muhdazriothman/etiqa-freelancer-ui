import { NgModule } from '@angular/core';
import { AddFreelancerRoutingModule } from './add-freelancer-routing.module';
import { AddFreelancerComponent } from './add-freelancer.component';
// import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CommonModule } from '@angular/common';
import { FormsModule  } from "@angular/forms";     
// import { FormsModule  } from "ng-zorro-antd/";     
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  imports: [
    AddFreelancerRoutingModule,
    NzInputModule,
    CommonModule,
    FormsModule,
    NzGridModule,
    NzFormModule,
    NzDividerModule,
    NzSelectModule,
    NzButtonModule,
    NzTypographyModule
  ],
  declarations: [AddFreelancerComponent],
  exports: [AddFreelancerComponent]
})
export class AddFreelancerModule { }
