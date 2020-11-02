import { NgModule } from '@angular/core';
import { EditFreelancerRoutingModule } from './edit-freelancer-routing.module';
import { EditFreelancerComponent } from './edit-freelancer.component';
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
    EditFreelancerRoutingModule,
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
  declarations: [EditFreelancerComponent],
  exports: [EditFreelancerComponent]
})
export class EditFreelancerModule { }
