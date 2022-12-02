import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanOfficerRoutingModule } from './loan-officer-routing.module';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    LoanApplicationComponent,
    EnquiryListComponent,
    CustomerlistComponent
  ],
  imports: [
    CommonModule,
    LoanOfficerRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    
  ]
})
export class LoanOfficerModule { }
